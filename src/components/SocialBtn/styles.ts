import styled from 'styled-components';


export const Container = styled.button`
    margin-top: 10px;
    background-color: var(--bgColor);
    color: var(--textColorWhite);
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    align-items: center;
    display: flex;
    border-radius: 10px;
    border: none;
    width: 100%;
    .icon{
        align-items: center;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        padding-right: 0.8rem;
        border-right: 1px #999 solid;
    }
   
    transition: filter 800ms;

    &:hover{
        filter: brightness(0.8);
    }
`;
