import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--textColorWhite);
  }
  .form{
      display: flex;
      justify-content: space-around;
      width: 100%;
      flex-direction: column;
      align-items: center;
  }
  textarea {
    padding: 1rem 1.5rem;
    width: 100%;
    min-height: 7rem;
    outline: none;
    resize: none;
    font-size: 1rem;
    font-weight: 400;
    background: var(--bgColor);
    border: none;
    color: var(--textColorWhite);
    border-radius: 0.25rem;
    &::placeholder {
      color: #555;
    }
  }
  input {
    padding: 1rem 1.5rem;
    width: 100%;
    height: 2rem;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
    background: var(--bgColor);
    border: none;
    border-radius: 0.25rem;
    color: var(--textColorWhite);

    &::placeholder {
      color: #555;
    }
 
  }
  button {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 60%;
    height: 3rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--textColorWhite);
    background: var(--bgColor);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;