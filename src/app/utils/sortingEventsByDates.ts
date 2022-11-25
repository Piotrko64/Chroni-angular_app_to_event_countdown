import { AllEvents } from 'src/@types/DataEvents';
export function sortingEventsByDates(listEvents: AllEvents) {
  return [...listEvents].sort((eventOne, eventTwo) =>
    new Date(eventOne.dataEvent) < new Date(eventTwo.dataEvent) ? -1 : 1
  );
}
