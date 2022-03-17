import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    max-height: (100vh - 5rem);
    margin: 0 auto;
    padding: 0 2rem;
    .navBar{
        position: fixed;
        margin: 40px 10px ;
        width: 180px;
        display: flex;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        background-color: var(--primaryColor);
        ul{
            li{
                cursor: pointer;
                border-bottom: 1px solid var(--bgColor) ;
                flex-direction: column;
                display: flex;
                align-items: center;
                padding:  1rem 3rem;
                list-style: none;
                strong{
                    color: var(--textColorWhite)
                }
            }

        }
    }
    .EmptyTopics{
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        h2{
            color: var(--textColorWhite);
            font-size: 2rem;
            margin-bottom: 30px;
        }
    }
    .main{
        padding: 2rem 10rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    @media (max-width:1000px) {
        .navBar{
            width: 160px;
        }}
    @media (max-width:900px) {
        .navBar{
            display: none;
        }
        .main{
            padding: 2rem 5rem;

        }
    }
    @media (max-width:600px) {
        .navBar{
            display: none;
        }
        .main{
            padding: 2rem 1rem;

        }
    }
`;
