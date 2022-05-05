// Define a Global Interface to Define the Order Entiry

import { Product } from "./Product";

/* 
Endpoints: {
    postOrder: '/orders'
}
*/

export interface Order {
    clientId: string; // For while doesnt exist
    products: Product[],
    discounts: null,
    coupons: null,
    total: string;
}