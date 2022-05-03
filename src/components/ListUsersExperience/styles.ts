import styled from 'styled-components'

export const Container = styled.ul`
    margin-top: 40px;
    position: relative;
    list-style: none;
    display: flex;
    align-items: center;
    
    li {
        transition: all ease 100ms;
        cursor: pointer;

        &:first-child {
            &:hover {
                margin-right: 10px;
                margin-top: -7px;
            }
        }

        & + li {
            margin-left: -7px;

            &:hover {
                margin: 0;
                margin-right: 10px;
                margin-top: -7px;
            }
        }

        &:last-child {
            margin-left: 10px;

            &:hover {
                transform: scale(1.03);
                font-weight: bold;
            }
        }
    }
`;