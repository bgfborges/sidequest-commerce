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
`;

interface CategoryInfoProps {
    isLoadedProducts: boolean;
}

export const CategoryInfo = styled.div<CategoryInfoProps>`
    width: 100%;
    background: var(--gray-900);
    padding: 30px;

    .title {
        h4 {
            font-size: 2rem;
        }
        margin-left: 20px;
        margin-bottom: 20px;
    }
`;

export const CategoryProducts = styled.ul`
    width: 100%;
    height: 50vh;
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
            opacity: 0.6;
            transition: all ease 200ms;
        }

        .info {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`;