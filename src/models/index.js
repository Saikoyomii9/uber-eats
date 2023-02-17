// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "DECLINED": "DECLINED",
  "COMPLETED": "COMPLETED"
};

const { NewRestaurant, NewDish, OrderDish, Order, User } = initSchema(schema);

export {
  NewRestaurant,
  NewDish,
  OrderDish,
  Order,
  User,
  OrderStatus
};