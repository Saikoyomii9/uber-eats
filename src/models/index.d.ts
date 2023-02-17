import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum OrderStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  COMPLETED = "COMPLETED"
}



type EagerNewRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewRestaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly image: string;
  readonly adminSub?: string | null;
  readonly NewDishes?: (NewDish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNewRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewRestaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly image: string;
  readonly adminSub?: string | null;
  readonly NewDishes: AsyncCollection<NewDish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NewRestaurant = LazyLoading extends LazyLoadingDisabled ? EagerNewRestaurant : LazyNewRestaurant

export declare const NewRestaurant: (new (init: ModelInit<NewRestaurant>) => NewRestaurant) & {
  copyOf(source: NewRestaurant, mutator: (draft: MutableModel<NewRestaurant>) => MutableModel<NewRestaurant> | void): NewRestaurant;
}

type EagerNewDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly image?: string | null;
  readonly price: number;
  readonly newrestaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNewDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly image?: string | null;
  readonly price: number;
  readonly newrestaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NewDish = LazyLoading extends LazyLoadingDisabled ? EagerNewDish : LazyNewDish

export declare const NewDish: (new (init: ModelInit<NewDish>) => NewDish) & {
  copyOf(source: NewDish, mutator: (draft: MutableModel<NewDish>) => MutableModel<NewDish> | void): NewDish;
}

type EagerOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly NewDish?: NewDish | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishNewDishId?: string | null;
}

type LazyOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly NewDish: AsyncItem<NewDish | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishNewDishId?: string | null;
}

export declare type OrderDish = LazyLoading extends LazyLoadingDisabled ? EagerOrderDish : LazyOrderDish

export declare const OrderDish: (new (init: ModelInit<OrderDish>) => OrderDish) & {
  copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish>) => MutableModel<OrderDish> | void): OrderDish;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly userID: string;
  readonly OrderDishes?: (OrderDish | null)[] | null;
  readonly NewRestaurant?: NewRestaurant | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderNewRestaurantId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly userID: string;
  readonly OrderDishes: AsyncCollection<OrderDish>;
  readonly NewRestaurant: AsyncItem<NewRestaurant | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderNewRestaurantId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly sub: string;
  readonly Orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly sub: string;
  readonly Orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}