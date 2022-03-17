import styled from 'styled-components';
import {FaComments} from 'react-icons/fa'

export const Container = styled.div`
    padding: 2rem 2rem;
    width: 90%;
    border-radius: 10px;
    background-color: var(--primaryColor);
    display: flex;
   
    flex-direction: column;
    margin: 10px 0;

    .mainCard{
        display: flex;
        .votes{
            padding: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            
        }
        .content{
            padding:0 1rem;
            flex: 7;
            strong{
                font-size: 1.2rem;
                color: var(--textColorWhite)
            }
            p{
                margin-top: 6px;
                color: var(--textColorWhite)
            }
        }
    }
    .footer{
        display: flex;
        padding:  0.8rem 0;
        align-items: center;
        justify-content: space-between;
        .user{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                margin-right: 10px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .cancel{
                margin-left: 0.5rem;
                flex-direction: column;
                display: flex;
                align-items: center;
                justify-content: center;
                strong{
                    color: var(--textColorWhite);
                }
                button{
                    margin-top: 5px;
                    background-color: var(--bgColor);
                    color: var(--textColorWhite);
                    border: none;
                    padding: 0.4rem;
                }
                
            }
        }
        .comments{
            cursor: pointer;
            display: flex;
            align-items: center;
            span{
                margin-left: 4px;
                font-size: 1rem;
                color: var(--textColorWhite)
            }

        }
    }
    @media (max-width:900px) {
        &{
            padding: 1rem 1rem;
        }
        .main{
            padding: 2rem 5rem;
            .user{
                background-color: green;
                .cancel{
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: row;
                }
            }
        }
        
    }
    @media (max-width:600px) {
        .main{
        }
        .comments{
                    .CommentName{
                        display: none;
                    }
                }
    }
`;

interface Iicon{
    press: boolean;
}

export const Message = styled(FaComments)`
    color: var(--textColorWhite);
    font-size: 30px;

`