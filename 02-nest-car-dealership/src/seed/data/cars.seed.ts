import { Car } from 'src/cars/interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Yaris',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Camry',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Accord',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Fit',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Sentra',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Altima',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Maxima',
  },
];
