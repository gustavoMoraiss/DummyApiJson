declare module 'react-native' {
  interface NativeModulesStatic {
    CalendarModule: {
      createCalendarEvent(
        title: string,
        description: string,
        location: string,
        startTime: number,
        endTime: number,
      ): Promise<string>;
    };
  }
}
