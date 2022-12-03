import { sortingEventsByDates } from './sortingEventsByDates';

const dummyList = [
  {
    userId: 1,
    eventId: '1',
    title: 'title',
    description: 'desc',
    dataEvent: 'Thu Nov 24 2022',
    sessionId: 'session',
  },
  {
    userId: 2,
    eventId: '2',
    title: 'title',
    description: 'desc',
    dataEvent: 'Thu Nov 21 2022',
    sessionId: 'session',
  },
  {
    userId: 3,
    eventId: '3',
    title: 'title',
    description: 'desc',
    dataEvent: 'Thu Nov 23 2022',
    sessionId: 'session',
  },
];

const sortingList = sortingEventsByDates(dummyList);

describe('check sorting events', () => {
  it('first event should have eventId equal 2', () => {
    expect(+sortingList[0].eventId).toEqual(2);
  });

  it('second event should have userId equal 3', () => {
    expect(+sortingList[1].userId!).toEqual(3);
  });
});
