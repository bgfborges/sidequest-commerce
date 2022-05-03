import axios from 'axios'
import Img from 'next/image'
import { useEffect, useState } from 'react'
import { Container, Categories, CategoryInfo, CategorySession } from './styles'

export default function ListCategories(){

    const [categories, setCategories] = useState<string[]>([]);

    // As long as the fakestoreapi doesnt have images for the categories, I'm going to create a static value
    const [categoryImage, setCategoryImage] = useState<string[]>([]);

    useEffect(() => {
        let images = [
            'https://i.ibb.co/RyfRX3w/15ca317faac1451c71d17229a9097c94.png',
            'https://i.ibb.co/ZxLbMTs/virtual-reality-illustration-free-vector.jpg',
            'https://i.ibb.co/Qbrq08V/94ed2751374448280f39b17d68e763ac.jpg',
            'https://i.ibb.co/vcd5GxL/virtual-reality.jpg'
        ]

        setCategoryImage(images);
    }, [])

    // This API doesn't have products with the shop goal, but works to show how to use an external API
    const requestCategories = async () => {
        const { data } = await axios('https://fakestoreapi.com/products/categories')
        setCategories(data);
    }

    // List the Product Categories from fakestoreapi.com
    useEffect(() => {
        requestCategories();
    }, [])

    return(
        <Container>
            <div className="content">               
                <h2>Categorias</h2>
                <p>Veja todas as categorias de produtos.</p>

                <CategorySession>
                    <Categories>
                        {categories.map( (category, i) => <li key={i}>
                            <div className='image'>
                                <Img src={categoryImage[i]} layout="fill" objectFit="cover" />
                            </div>
                            <div className="title">
                                <h3>{category}</h3>
                            </div>
                        </li> )}
                    </Categories>

                    <CategoryInfo></CategoryInfo>
                </CategorySession>
            </div>
        </Container>
    )
}