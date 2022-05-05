// Define a Global Interface to Define the Category Entiry

/* 
Endpoints: {
    getCategories: '/categories',
    getCategory: '/categories/:id',
}
*/

export interface Category {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    // createdAt: string; -- optional to use, not necessary in this POC
}