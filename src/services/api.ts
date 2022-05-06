/*
* Strategy for API Request
* Axios - Handle the Requests
* React Query - Handle the Revalidate (a simple update on focus)/treat the cashe on the requests/etc.
*/

import axios, { AxiosInstance } from 'axios';
import { QueryClient } from 'react-query'
import { Category } from '../models/Category'
import { Order } from '../models/Order';
import { Product } from '../models/Product';

const queryClient = new QueryClient()

export { queryClient }

// import axios from 'axios'


export class StoreAPI {

    private api: AxiosInstance;

    constructor(){
        this.api = axios.create({
            baseURL: 'https://6270a95ce1c7aec428f6669b.mockapi.io/api/v1'
        })
    }

    public async getCategories(amount?: number): Promise<Category[]> {
        // amount is the number of items we want to retrieve

        const endpoint = amount > 0 ? `/categories?page=1&limit=${amount}` : '/categories'

        // Basic Error Handling - Further Improvements
        try {
            // Return the Categories List with the opinional amount set
            const response = await this.api.get(endpoint)
            const categories: Category[] = response.data

            return categories
        } catch(e){
            console.log(e);
        }
    }
    
    public async getCategory(categoryId: string): Promise<Category> {
        // amount is the number of items we want to retrieve

        const endpoint =`/categories/${categoryId}`

        // Basic Error Handling - Further Improvements
        try {
            // Return the Categories List with the opinional amount set
            const response = await this.api.get(endpoint)
            const category: Category = response.data

            return category
        } catch(e) {
            console.log(e)
        }
    }
    
    public async getProducts(categoryId: string, amount?: number): Promise<Product[]> {
        // amount is the number of items we want to retrieve

        const endpoint = amount > 0 ? `/categories/${categoryId}/products?page=1&limit=${amount}` : `/categories/${categoryId}/products`

        // Basic Error Handling - Further Improvements
        try {
            // Return the Categories List with the opinional amount set
            const response = await this.api.get(endpoint)
            const products: Product[] = response.data

            return products
        } catch(e) {
            console.log(e)
        }
    }

    public async getProduct(categoryId: any, productId: any): Promise<Product | null> {

        const endpoint = `/categories/${categoryId}/products/${productId}`

        // Basic Error Handling - Further Improvements
        try{
            // Return the Categories List with the opinional amount set
            const response = await this.api.get(endpoint)
            const product: Product = response.data;

            // The Product endpoint doesn't return the category name from API, so for this situation, it's necessary to make a second call to get it
            // In production with a real API (not this mock.io) its necessary to implement better

            const categoryFromThisProduct = await this.getCategory(product.categoryId);
            const { name: categoryName } = categoryFromThisProduct;

            // Assign Category Name to Product
            product.category = categoryName;

            // Format the Price
            product.price = new Intl.NumberFormat('es-US', {
                style: 'currency',
                currency: 'BRL',
                currencyDisplay: 'narrowSymbol'
            }).format(Number(product.price) / 100)

            return product
        } catch(e){
            console.log(e)
        }
    }

    public async postOrder(order: Order): Promise<void> {

        // Basic Error Handling - Further Improvements
        try{
            await this.api({
                method: 'post',
                url: '/orders',
                data: order
            })
        } catch(e){
            console.log(e)
        }
    }

}