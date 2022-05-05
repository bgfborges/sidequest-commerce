// Define a Global Interface to Define the Product Entiry

/* 
Endpoints: {
    getProducts: '/categories/:id/products',
    getProduct: '/categories/:id/products/:id',
}
*/

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    thumbnail: string;
    categoryId: string;
    category?: string;
}