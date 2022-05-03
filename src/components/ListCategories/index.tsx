import axios from 'axios'
import Img from 'next/image'
import { useEffect, useState } from 'react'
import { Container, Categories, CategoryInfo, CategorySession, CategoryProducts } from './styles'
import { AiFillRightSquare } from 'react-icons/ai'


type Category = {
    name: string;
    thumbnail: string;
    id: string;
    description: string;
}

type Product = {
    name: string;
    id: string;
    thumbnail: string;
}

type ListCategoriesProps = {
    categoryCount: number;
    productCount: number;
}

export default function ListCategories({categoryCount, productCount}: ListCategoriesProps){

    const [categories, setCategories] = useState<Category[]>([]);
    const [prevProducts, setPrevProducts] = useState<Product[]>([]);
    const [isLoadedProducts, setIsLoadedProducsts] = useState<boolean>(false);
    const [loadedCategory, setloadedCategory] = useState<string>('');

    // This API doesn't have products with the shop goal, but works to show how to use an external API
    const requestCategories = async () => {
        const { data: newCategories } = await axios(`https://6270a95ce1c7aec428f6669b.mockapi.io/api/v1/categories?page=1&limit=${categoryCount}`)
        setCategories(newCategories)
        setloadedCategory(newCategories[0].name)
        
        const { data: newProducts } = await axios(`https://6270a95ce1c7aec428f6669b.mockapi.io/api/v1/categories/${newCategories[0].id}/products?page=1&limit=${productCount}`)
        setPrevProducts(newProducts)
    }

    // List the Product Categories from fakestoreapi.com
    useEffect(() => {
        requestCategories();
    }, [])

    // Function to handle the product by category call
    const handleProductByCategoryCall = async (id: string, categoryName: string) => {
        const { data } = await axios(`https://6270a95ce1c7aec428f6669b.mockapi.io/api/v1/categories/${id}/products?page=1&limit=${productCount}`)
        setPrevProducts(data)
        setIsLoadedProducsts(!isLoadedProducts)
        setloadedCategory(categoryName)
    }

    console.log(isLoadedProducts);
    return(
        <Container>
            <div className="content">               
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
                    
                    <CategoryInfo isLoadedProducts={isLoadedProducts}>
                        <div className="title">
                            <h4>{loadedCategory} {'>'} Produtos</h4>
                            <p>Melhores produtos dessa categoria.</p>
                        </div>

                        <CategoryProducts>
                            {prevProducts.map( product => <li key={product.id}>
                                <div className="thumbnail">
                                    <Img src={product.thumbnail} layout="fill" objectFit='cover' />
                                </div>
                                <div className="info">
                                    <h5>{product.name}</h5>
                                    <AiFillRightSquare />
                                </div>
                            </li>)}
                        </CategoryProducts>
                    </CategoryInfo>
                </CategorySession>
            </div>
        </Container>
    )
}