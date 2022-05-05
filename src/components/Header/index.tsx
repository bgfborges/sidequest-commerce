import Img from 'next/image'
import { Container, Menu, Logo } from './styles';
import SignIn from '../SignIn';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import CartIcon from '../CartIcon';

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
                <Logo>
                    <Img src="/images/logo.png" alt="Sidequest Logo" height={64} width={176} />
                </Logo>

                <div>
                    <Menu>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="https://github.com/bgfborges/sidequest-commerce"><a>Docs</a></Link></li>
                    </Menu>
                    <SignIn />
                    <Link href="/cart"><a href="#"><CartIcon /></a></Link>
                </div>
            </div>
        </Container>
    )
}