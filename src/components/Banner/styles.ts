import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 80vh;
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
`;

export const InfoContent = styled.div`
    padding: 50px;
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
`;

export const ImageContent = styled.div`
    padding: 50px;
    width: 51%;
    position: relative;
    min-height: 800px;
`;

export const BannerButtons = styled.div`
    padding-top: 50px;

    button {
        margin-right: 15px;
    }
`;