import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "../../../../components/Head";
import Header from "../../../../components/Header";
import ProductBanner from "../../../../components/ProductBanner";

type Product = {
    name: string;
    id: string;
    thumbnail: string;
    price: string;
    description: string;
    category: string;
    categoryId: string;
}

interface ProductProps {
    product: Product;
}

export default function Product({product}: ProductProps){
    return(
        <>
            <Head title={product.name + '| Loja de Gadgets para Realidade Virtual'} />
            <Header />
            <ProductBanner 
            id={product.id}
            title={product.name} 
            image={product.thumbnail} 
            description={product.description} 
            price={product.price} 
            category={product.category} 
            categoryId={product.categoryId}
            />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const { data } = await axios(`https://6270a95ce1c7aec428f6669b.mockapi.io/api/v1/categories/${params.category}/products/${params.id}`)

    // A good api would call the product category slug or name, but this doesn,t, only for this avaliation process, the app need to call the category too by id to get its name

    const { data: category } = await axios(`https://6270a95ce1c7aec428f6669b.mockapi.io/api/v1/categories/${params.category}`)

    const product = {
        name: data.name,
        id: data.id,
        thumbnail: data.thumbnail,
        price: new Intl.NumberFormat('es-US', {
            style: 'currency',
            currency: 'BRL',
            currencyDisplay: 'narrowSymbol'
          }).format(data.price / 100),
        description: data.description,
        category: category.name,
        categoryId: params.category
    }

    return {
        props: {
            product
        }
    }
}