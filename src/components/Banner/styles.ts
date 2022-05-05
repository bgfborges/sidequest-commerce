import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    background-image: url('/images/background-elipse.png');
    background-repeat: no-repeat;
    background-size: 50%;

    .content {
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-top: 200px;
    }

    @media (max-width: 1080px){
        
    }

    @media (max-width: 720px){
        margin-bottom: 50px;

        .content {
            flex-direction: column-reverse;
            justify-content: center;
            align-content: center;
            margin-top: 200px;
        }
    }
`;

export const InfoContent = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 3.5rem;
    }

    p {
        margin-top: 30px;
        font-size: 1.4rem;
    }

    span {
        font-weight: bold;
        font-size: 1.3rem;
        margin-bottom: 15px;
    }

    @media (max-width: 720px){
        width: 100%;

        h1 {
            font-size: 2.5rem;
        }
    }
`;

export const ImageContent = styled.div`
    width: 51%;
    position: relative;
    min-height: 800px;
    z-index: 90;

    @media (max-width: 720px){
        width: 100%;
        min-height: auto;
    }
`;

export const BannerButtons = styled.div`
    padding-top: 50px;

    button {
        margin-right: 15px;
    }
`;