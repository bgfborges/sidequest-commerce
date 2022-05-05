import { GetServerSideProps } from "next/types"
import Banner from "../components/Banner"
import Head from "../components/Head"
import Header from "../components/Header"
import ListCategories from "../components/ListCategories"
import { Category } from "../models/Category"
import { Product } from "../models/Product"
import { StoreAPI } from "../services/api"

interface HomeProps {
  categories: Category[];
  products: Product[]
}

export default function Home({ categories, products }: HomeProps) {
  return (
    <div>
      <Head title="Sidequest Commerce | Compre os Gadgets" />
      <Header />
      <Banner />
      <ListCategories categories={categories} products={products} />
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {

  const storeApi = new StoreAPI();

  // Basic Error handling - further improvements
  const categories = await storeApi.getCategories(4);
  const products = await storeApi.getProducts(categories[0].id, 4)

  return {
      props: {
          categories,
          products,
      }
  }

}