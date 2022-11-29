const wallpapersData = [
  {
    name: 'city',
    hours: 22,
  },
  {
    name: 'night',
    hours: 19,
  },

  {
    name: 'cat',
    hours: 17,
  },
  {
    name: 'sky',
    hours: 14,
  },
  {
    name: 'dog',
    hours: 11,
  },
  {
    name: 'lake',
    hours: 8,
  },
  {
    name: 'skyMorning',
    hours: 6,
  },
  {
    name: 'sun',
    hours: 4,
  },
  {
    name: 'water',
    hours: 0,
  },
];

export function findWallpaper() {
  const hours = new Date().getHours();

  const nameImg = wallpapersData.find(
    (wallpaper) => hours >= wallpaper.hours
  )?.name;

  return nameImg;
}
