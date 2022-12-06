import { v4 as uuidv4 } from 'uuid';

export const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000000000000000);
}