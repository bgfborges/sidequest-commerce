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
`;

export const CategorySession = styled.div`
    width: 100%;
    display: flex;
    margin-top: 50px;
`;

export const Categories = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    gap: 20px;
    width: 100%;
    margin-top: 40px;
    padding: 20px;

    li {
        border-radius: 3px;
        background: var(--pink-900);
        position: relative;
        height: 300px;
        border-radius: 3px;
        cursor: pointer;

        h3 {
            z-index: 100;
            position: absolute;
            bottom: 5px;
            left: 5px;
            transition: all ease 400ms;
        }

        .image {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 80;
        }

        &:hover .title {
            height: 0;
            opacity: 1;
        }
        
        &:hover h3 {
            bottom: 40px;
        }

        .title {
            position: absolute;
            background: linear-gradient(to top, var(--black), var(--pink-900));
            z-index: 90;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            opacity: 0.5;
            transition: all ease 200ms;
            padding: 10px;
        }
    }
`;

export const CategoryInfo = styled.div`
    width: 00%;
`;