import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100%;
    min-height: 80vh;
    display: flex;
    align-items: center;

    .content {
        flex: 1;
    }
`;

export const ProductListContainer = styled.div`
    width: 100%;
    height: 500px;
    background: var(--white);
    border-radius: 5px;
    padding: 30px;

    color: black;

    h1 {
        span {
            color: var(--pink-900);
        }
        font-size: 2rem;
    }

    > div {
        display: flex;
    }
`;

export const ProductListItems = styled.ul`
    list-style: none;
    margin-top: 20px;
    width: 80%;

    li {
        width: 100%;
        padding: 20px;
        border-radius: 5px;
        border: 1px solid #ccc;

        & + li {
            margin-top: 5px;
        }

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const InputQuantity = styled.div`
    width: 180px;
    position: relative;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        padding: 15px;
    }

    svg {
        width: 25px;
        height: 25px;
        margin: 10px;
        cursor: pointer;
    }
`;

export const ProductInfo = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    h2 {
        font-size: 1rem;
        margin-left: 10px;
    }
`;

export const ResumeInfo = styled.div`
    flex: 1;
    margin: 10px;
    min-height: 400px;

    > div {
        width: 100%;
        min-height: 200px;
        background: var(--pink-500);
        margin-top: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        ul {
            list-style: none;
            padding: 20px;
            font-weight: 500;
            color: #444;

            li{
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #666;
            }   
        }
    }

    button {
        width: 100%;
        margin-top: 20px;
    }
`;

export const ProductImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 3px;
`;