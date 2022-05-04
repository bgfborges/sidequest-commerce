import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100%;
    min-height: 80vh;

    .content {
        flex: 1;
        padding-top: 200px;
    }
`;

export const ProductListContainer = styled.div`
    width: 100%;
    background: var(--white);
    border-radius: 5px;
    padding: 30px;
    min-height: 300px;

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
    position: relative;
    display: flex;
    align-items: center;
    background: #efefef;
    padding: 10px 20px;
    border-radius: 4px;

    input {
        width: 100%;
        padding: 10px;
        margin: 0 10px;
    }

    svg {
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    align-items: center;

    a {
        width: 50%;
    }
    
    > div {
        margin-left: 10px;

        h2 {
            font-size: 1rem;
        }
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

export const EndItemControls = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const ExcludeIcon = styled.div`
    svg {
        width: 20px;
        height: 20px;
        margin: 10px;
        cursor: pointer;
    }

    border-left: 1px solid #ccc;
    margin-left: 10px;
`;