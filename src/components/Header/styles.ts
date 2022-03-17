import styled from 'styled-components';

export const Container = styled.div`
    height: 5.4rem;
    padding-bottom: 10px 0;
    z-index: 2;
 
    position: sticky;
   
    background-color: var(--bgColor);
  
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--primaryColor);

.contentHeader{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    .right{
        align-items: center;
        justify-content: center;
        display: inherit;
        .navbar{
            display: inherit;
            ul{
                gap: 10px;
                align-items: center;
                justify-content: center;
                display: inherit;
                li{
                    list-style: none;
                    a{
                        flex-direction: column;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--textColorWhite);
                        font-weight: bold;
                        strong{
                        }
                    }

                }
            }
        }

        .user{
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                margin-bottom: 3px;
                width: 40px;
                height: 40px;
                cursor: pointer;
                border-radius: 10px;
            }
            button{
                border-radius: 10px;
                padding: 0.2rem 0.7rem;
                background-color: var(--secondaryColor);
                border: 0;
            }
        }

    }
    }
   @media (max-width: 700px) {
    .navbar{
        strong{
            display: none}
        }
    }
   @media (max-width: 600px) {
    &{
        padding: 0;
        margin: 0;
    }
    .contentHeader{
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
   
    .logo{
        img{
           width: 120px;
           height: auto;
        }
        }
    }

`;

export const BtnNewTopic = styled.button`
    padding: 0.8rem 1.4rem;
    margin: 0 10px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    max-height: 3rem;
    background-color: var(--primaryColor);
    border: none;
    strong{
        margin-left: 10px;
        color: var(--textColorWhite);
        border-radius: 6px;
        font-weight: bold;
    }
    @media (max-width: 600px) {
        border-radius: 50%;
        position: fixed;
        bottom: 25px;
        right: 10px;
        width: 60px;
        height: 60px;
        max-height: initial;
        .iconbtn{
            font-size: 20px;
        }
        strong{
            display: none;
        }
    }
`