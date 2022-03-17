import styled from 'styled-components';
export const Container = styled.div`
    flex: 1;
    min-height: calc(400px - 5rem);
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 1px;             
    }

    &::-webkit-scrollbar-track {
    background: var(--primaryColor); 
    }

    &::-webkit-scrollbar-thumb {
    background-color: var(--primaryColor); 
    border-radius: 20px;       
    border: 3px solid var(--primaryColor);  
}
    max-height: 400px;
    .header{
        padding: 1rem 1px;
        background-color: var(--primaryColor);
        border-bottom: 1px solid var(--bgColor);
        display: flex;
        justify-content: space-between;
        position: sticky;
        margin-top: 10px;
        top: 0;
        h2{
            color: var(--textColorWhite);
        }
        button{
            background-color: var(--bgColor);
            color: var(--textColorWhite);
            padding: 4px 10px;
            border: 0;
            border-radius: 3px;
            font-weight: bold;
        }
    }
    .post{
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        height: auto;
        align-items: center;
        textarea{
            &::-webkit-scrollbar {
                width: 10px;             
            }

            &::-webkit-scrollbar-track {
                background: var(--primaryColor); 
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--bgColor); 
                border-radius: 20px;       
            }
            background-color: var(--primaryColor); 
            border-radius: 20px;       
            border: 3px solid var(--primaryColor);  
            background-color: var(--bgColor);
            color: var(--textColorWhite);
            padding: 1rem;
            flex: 1;
            outline: none;
            border: none;
            border-radius: 10px;
            resize: none;
            min-height: 80px;
        }
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            background-color: var(--bgColor);
            color: var(--textColorWhite);
            border: none;
            border-radius: 100%;
            padding: 10px;
            height: 50px;
            width: 50px;
        }
    }
`;
