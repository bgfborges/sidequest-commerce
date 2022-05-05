import { Container } from './styles'
import Img from 'next/image'
import { useEffect, useState } from 'react';

type user = {
    name: string;
    image: string;
}

interface ListUsersExperience {
    text: string;
}

export default function ListUsersExperience({ text }: ListUsersExperience){

    const [users, setUsers] = useState<user[]>([]);

    // I didn't want to lose the project time looking for an API where users have photos (json placeholder doesnt)
    // Initial State
    useEffect(() => {
        let users = [
            {
                name: 'Gabriel Dantas',
                image: '/images/user-1.png'
            },
            {
                name: 'Felipe Dantas',
                image: '/images/user-2.png'
            },
            {
                name: 'Jorge Dantas',
                image: '/images/user-3.png'
            },
            {
                name: 'Matheus Dantas',
                image: '/images/user-4.png'
            },
        ]

        setUsers(users);

    }, [])

    return(
        <Container>
            {users.map( (user, i) => user && <li key={i}><Img src={user.image} alt={user.name} width={32} height={32} objectFit='contain' /></li> )}
            <li>{text}</li>
        </Container>
    )
}