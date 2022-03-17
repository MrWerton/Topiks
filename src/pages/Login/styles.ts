import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: var(--secondaryColor);
    display: flex;

    .content{
        flex-direction: column;
        display: flex;
        flex: 1;
        background-color: var(--secondaryColor);
        padding: 0 2rem;
        .logo{
            padding: 10px 30px;
        }
        .illustration{
            width: 100%;
            height: 60%;
            img{
                width: 100%;
                height: 100% ;
            }
        }
        .description{
            margin-top: 10px;
            padding: 1rem 2rem;
            width: 90%;
            h1{
                font-size: 2rem;

            }
            p{
                font-size: 1rem;
                margin-top: 10px;
            }

        }
        .btn{
            display: none;
        }
    }
    .form{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--bgColor);
        flex: 1;
        .box{
            border-radius: 10px;
            padding: 2rem 2rem;
            align-items: center;
            display: flex;
            flex-direction: column;
            background-color: var(--primaryColor);
            width: 90%;
            max-width: 400px;
            height: 75vh;
            box-shadow: 2px 3px 2px rgba(0,0,0,0.1);
            .headerBox{
                h2{
                    font-size: 2rem;
                    color: var(--textColorWhite)
                }
                p{
                    margin-top: 6px;
                    font-size: 1rem;
                    color: var(--textColorWhite)
                }
            }
            .mainBox{
                margin-top: 10px;
            }
            
        }
    }
    @media (max-width: 900px) {
        .content{
            .illustration{
                max-height: 300px;
            }
            .description{
                h1{
                    font-size: 1.8rem;
                }
            }

        }
    }
    @media (max-width: 700px) {
            .form{
                display: none;
            }
            .contemt{

            }
            .content{
                .illustration{
                    width: 100%;
                    max-height: 250px;
                    height: auto;
                }
                display: flex;
                align-items: center;
                padding: 10px;
                .btn{
                    padding: 10px;
                    align-items: center;
                    width: 250px;
                    margin-bottom: 4rem;
                    background-color: var(--secondaryColor);
                    display: block;
                }
            }
            &{
                overflow-y: auto;
                overflow-x:hidden;
            }
        
    }

    
`;
