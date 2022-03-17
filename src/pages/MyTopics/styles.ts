import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    max-height: (100vh - 5rem);
    margin: 0 auto;
    padding: 0 2rem;
    .EmptyTopics{
        display: flex;
        align-items: center;
        justify-content: center;
        h2{
            color: var(--textColorWhite);
        }
    }
    .main{
        padding: 2rem 10rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;
