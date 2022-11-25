export type AllEvents = Array<EventUser>;

export interface EventUser {
  userId: number;
  eventId: string;
  title: string;
  description: string;
  dataEvent: string;
  sessionId: string;
}

export interface EventById {
  message: string;
  data: {
    userId: number;
    eventId: string;
    title: string;
    description: string;
    dataEvent: string;
    sessionId: string;
  };
}

export interface DataEvents {
  dataUser: {
    allEvents: AllEvents;
  };
}
