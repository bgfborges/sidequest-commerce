import Img from 'next/image'
import { Container, Menu } from './styles';
import SignIn from '../SignIn';
import { useEffect, useState } from 'react';

export default function Header(){
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if( window.scrollY > 0 ){
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
    }, [])

    return(
        <Container scroll={isScroll}>
            <div className="content">
                <Img src="/images/logo.png" alt="Sidequest Logo" height={64} width={176} />

                <div>
                <Menu>
                    <li>Home</li>
                    <li>Shop</li>
                </Menu>
                <SignIn />
                </div>
            </div>
        </Container>
    )
}