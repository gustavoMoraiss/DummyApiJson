package com.dummyprojectapi

import android.content.ContentValues
import android.provider.CalendarContract
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.TimeZone


class CalendarModule internal constructor(context: ReactApplicationContext?) :
    ReactContextBaseJavaModule(context) {
    override fun getName(): String = "CalendarModule"

    @ReactMethod
    fun createCalendarEvent(
        title: String,
        description: String,
        location: String,
        startTime: Double,
        endTime: Double,
        promise: Promise
    ) {
        try {
            val contentResolver = reactApplicationContext.contentResolver
            val calendars = contentResolver.query(
                CalendarContract.Calendars.CONTENT_URI,
                arrayOf(CalendarContract.Calendars._ID),null, null, null
            )

            if (calendars == null || !calendars.moveToFirst()) {
                promise.reject("NO_CALENDAR", "No calendar found on device")
                calendars?.close()
                return
            }

            val calendarId = calendars.getLong(0)
            calendars.close()

            val values = ContentValues().apply {
                put(CalendarContract.Events.DTSTART, startTime)
                put(CalendarContract.Events.DTEND, endTime)
                put(CalendarContract.Events.TITLE, title)
                put(CalendarContract.Events.DESCRIPTION, description)
                put(CalendarContract.Events.CALENDAR_ID, calendarId)
                put(CalendarContract.Events.EVENT_TIMEZONE, TimeZone.getDefault().id)
                put(CalendarContract.Events.EVENT_LOCATION, location)
            }

            val uri = contentResolver.insert(CalendarContract.Events.CONTENT_URI, values)
            if (uri == null) {
                promise.reject("INSERT_FAILED", "Failed to insert event")
                return
            }

            val eventId = uri.lastPathSegment?.toLongOrNull()
            if (eventId != null) {
                promise.resolve(eventId.toString())
            } else {
                promise.reject("INVALID_EVENT_ID", "Failed to retrieve event ID")
            }

        } catch (e: Exception) {
            Log.e("CalendarModule", "Error creating event", e)
            promise.reject("ERROR_CREATING_EVENT", e)
        }
    }
}