import styled from 'styled-components';

export const Container = styled.div`
    min-height: 180px;
    margin-bottom: 10px;
    padding: 1.5rem 2rem;
    justify-content: space-between;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: var(--bgColor);
    .content{
        flex: 4;
        p{
            font-size: 1rem;
            color: var(--textColorWhite);
        }
    }
    .footer{
        display: inherit;
        align-items: center;
        flex: 1;
        .user{
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .userName{
                display: block;
                color: var(--textColorWhite);
                font-weight: bold;
            }

        }
    }
`;
