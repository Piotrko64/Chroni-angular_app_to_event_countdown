export interface DataEvents {
  dataUser: {
    allEvents: Array<{
      userId: number;
      eventId: string;
      title: string;
      description: string;
    }>;
  };
}
