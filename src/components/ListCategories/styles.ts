import styled from 'styled-components'

export const Container = styled.div`
    padding-top: 70px;
    h2 {
        font-size: 2.5rem;
    }

    p {
        font-weight: 500;
        margin-top: 10px;
    }
    background-image: url('/images/background-elipse-right.png');
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
`;

export const CategorySession = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Categories = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
    padding: 20px;

    li {
        border-radius: 3px;
        background: var(--pink-900);
        position: relative;
        height: 300px;
        border-radius: 3px;
        cursor: pointer;

        .thumbnail {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 80;
        }

        .overlay {
            opacity: 0.5;
            position: absolute;
            background: linear-gradient(to top, var(--black), var(--pink-900));
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            transition: all ease 400ms;
        }

        .info {
            position: absolute;
            z-index: 90;
            width: 100%;
            height: 100%;
            top: 0;
            transition: all ease 200ms;
            padding: 10px;
            color: var(--gray-100);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            color: var(--gray-100);

            h3 {
                transition: all ease 400ms;
                z-index: 90;
            }
            
            p {
                transition: all ease 400ms;
                font-size: 0.9rem;
                z-index: 90;
            }

            &:hover .overlay {
                opacity: 0.5;
                bottom: 0;
                height: 130px;
            }
            
        }
    }

    @media (max-width: 1080px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 720px){
        grid-template-columns: 1fr;
        margin-top: 50px;
    }
`;

export const CategoryInfo = styled.div`
    width: 100%;
    background: var(--gray-900);
    padding: 50px;

    .title {
        h4 {
            font-size: 1.5rem;
        }
        margin: 20px;

        span {
            color: var(--pink-900);
            font-weight: 900;
            font-size: 2rem;
        }
    }

    @media (max-width: 720px){
        padding: 10px;

        .title {
            h4 {
                font-size: 1.35rem;
            }
            margin: 20px;

            span {
                color: var(--pink-900);
                font-weight: 900;
                font-size: 1.5rem;
            }
        }
    }
`;

export const CategoryProducts = styled.ul`
    width: calc(100% - 50px);
    height: 30vh;
    margin: 20px;
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    list-style: none;

    li {
        background: var(--pink-900);
        border-radius: 5px;
        cursor: pointer;

        &:hover .thumbnail {
            opacity: 1;
        }

        .thumbnail {
            position: relative;
            width: 100%;
            height: 90%;
            display: flex;
            align-items: flex-end;
            padding: 10px;
            font-weight: bold;
            z-index: 50;
            opacity: 0.9;
            transition: all ease 200ms;
        }

        .info {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    
    @media (max-width: 720px){
        grid-template-columns: 1fr;
        
        li {
            height: 200px;

            .thumbnail {
                padding-top: 5px;
                height: 87%;
            }
        }
    }

    @media (max-width: 1080px) and (min-width: 720) {
        grid-template-columns: 1fr 1fr;

        li{
            height: 400px;
        }

        .thumbnail {
            height: 90%;
        }

        .info {
            font-size: 1.5rem;
        }
    }
`;