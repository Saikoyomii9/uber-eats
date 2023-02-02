// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "DECLINED": "DECLINED",
  "COMPLETED": "COMPLETED"
};

const { OrderDish, Dish, Restaurant, Order, User } = initSchema(schema);

export {
  OrderDish,
  Dish,
  Restaurant,
  Order,
  User,
  OrderStatus
};