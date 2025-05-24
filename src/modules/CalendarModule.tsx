import {NativeModules, PermissionsAndroid, Platform} from 'react-native';

const {CalendarModule} = NativeModules;

// Tipagem dos parâmetros
export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: Date | string;
  endDate: Date | string;
}

// Função para solicitar permissão no Android
export async function requestCalendarPermission(): Promise<boolean> {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_CALENDAR,
      PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
    ]);

    const writeGranted =
      granted['android.permission.WRITE_CALENDAR'] ===
      PermissionsAndroid.RESULTS.GRANTED;
    const readGranted =
      granted['android.permission.READ_CALENDAR'] ===
      PermissionsAndroid.RESULTS.GRANTED;

    return writeGranted && readGranted;
  }
  return true;
}

// Função para criar um evento no calendário
export async function createCalendarEvent({
  title,
  description,
  location,
  startDate,
  endDate,
}: CalendarEvent): Promise<number> {
  const hasPermission = await requestCalendarPermission();
  if (!hasPermission) {
    throw new Error('Calendar permission not granted');
  }

  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();

  const eventId: number = await CalendarModule.createCalendarEvent(
    title,
    description,
    location,
    startTime,
    endTime,
  );

  return eventId;
}
