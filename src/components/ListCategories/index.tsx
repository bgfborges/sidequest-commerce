import Img from 'next/image'
import { useState } from 'react'
import { Container, Categories, CategoryInfo, CategorySession, CategoryProducts } from './styles'
import { AiFillRightSquare } from 'react-icons/ai'
import Link from 'next/link'
import { StoreAPI } from '../../services/api'
import { Product } from '../../models/Product'
import { Category } from '../../models/Category'



interface ListCategoriesProps {
    categories: Category[];
    products: Product[];
}

export default function ListCategories({categories, products}: ListCategoriesProps){

    const [loadedProducts, setLoadedProducts] = useState<Product[]>(products)

    const storeApi = new StoreAPI();

    // Function to handle the product request by category onClick
    const handleProductByCategoryCall = async (id: string, categoryName: string) => {
        const products = await storeApi.getProducts(id, 4)
        setLoadedProducts(products)
    }

    return(
        <Container>
            <div className="content" id="categories">               
                <h2>Categorias</h2>
                <p>Veja todas as categorias de produtos.</p>

                <CategorySession>
                    <Categories>
                        {categories.map( (category) => <li key={category.id} onClick={async () => await handleProductByCategoryCall(category.id, category.name)}>
                            <div className='thumbnail'>
                                <Img src={category.thumbnail} layout="fill" objectFit="cover" />
                            </div>
                            <div className="info">
                                <div className="overlay"></div>
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                            </div>
                        </li> )}
                    </Categories>
                    
                    <CategoryInfo>
                        <div className="title">
                            <h4><span>{categories[0].name}</span> {'>'} Produtos</h4>
                            <p>Melhores produtos dessa categoria.</p>
                        </div>

                        <CategoryProducts>
                            {loadedProducts.map( product => <li key={product.id}>
                                <Link href={`category/${product.categoryId}/product/${product.id}`}>
                                    <a href="">
                                        <div className="thumbnail">
                                            <Img src={product.thumbnail} layout="fill" objectFit='cover' />
                                        </div>
                                        <div className="info">
                                            <h5>{product.name}</h5>
                                            <AiFillRightSquare />
                                        </div>
                                    </a>
                                </Link>
                            </li>)}
                        </CategoryProducts>
                    </CategoryInfo>
                </CategorySession>
            </div>
        </Container>
    )
}