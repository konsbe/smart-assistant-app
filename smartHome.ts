export const rooms = {
  'Entrance Hall': {
    temperature: 26,
    state: { lights: true, isEmpty: true },
    image: require('./images/entranceHall.jpeg'),
  },
  'Kitchen Room': {
    temperature: 26,
    state: { lights: false, isEmpty: true },
    controllers: { kitchen: false, kitchenTemperature: 0 },
    image: require('./images/kitchen.jpg'),
  },
  'Living Room': {
    temperature: 22,
    state: { lights: false, isEmpty: false },
    image: require('./images/livingRoom.jpg'),
  },
  'Bedroom 1': {
    temperature: 22,
    state: { lights: false, isEmpty: false },
    image: require('./images/bedroom.jpg'),
  },
  Bathroom: {
    temperature: 22,
    state: { lights: false, isEmpty: true },
    image: require('./images/bathroom.jpg'),
  },
  'Laundry Room': {
    temperature: 22,
    state: { lights: true, isEmpty: true },
    image: require('./images/laundry.png'),
  },
  'Guest Room': {
    temperature: 22,
    state: { lights: true, isEmpty: true },
    image: require('./images/entranceHall.jpeg'),
  },
  Office: {
    temperature: 22,
    state: { lights: true, isEmpty: true },
    controllers: { pc: true },
    image: require('./images/office.jpeg'),
  },
};
