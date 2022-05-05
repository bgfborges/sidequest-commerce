import axios from "axios";
import { GetServerSideProps } from "next";
import { useContext } from "react";
import Head from "../../../../components/Head";
import Header from "../../../../components/Header";
import ProductBanner from "../../../../components/ProductBanner";
import { CartContext } from "../../../../contexts/CartContext";
import { Product as ProductType } from "../../../../models/Product";
import { StoreAPI } from "../../../../services/api";



interface ProductProps {
    product: ProductType;
}

export default function Product({product}: ProductProps){
    const { state } = useContext(CartContext);

    // Check if Product is on Cart
    const productOnCart = !!state.cart.cartItems.find((item: ProductType) => item.id === product.id )

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
            isOnCart={productOnCart}
            />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    // Call Product with Category
    const storeApi = new StoreAPI

    const product = await storeApi.getProduct(params.category, params.id);

    return {
        props: {
            product,
        }
    }
}