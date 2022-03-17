import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bgColor: #222222;
  --secondaryColor: #E7E7E7;
  --primaryColor: #303030;
  --textColorGray: #ccc;
  --textColorDark: #222;
  --textColorWhite: #ddd;
  --downColor: #FF9494;
  --upColor: #5EFF9E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--bgColor);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem "Poppins", sans-serif;
  }
 a{color: inherit; text-decoration: none}
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--textColorDark)
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  
  .react-modal-overlay {
    position: fixed;
    top: 0;
    z-index: 222;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .react-modal-content {
      overflow: hidden;
    position: relative;
    padding: 3rem;
    width: 100%;
    max-width: 476px;
    background: var(--primaryColor);
    border-radius: 0.25rem;
    @media (max-width:600px) {
      &{
        width: 90%;
        margin: 10px;
      }
    }
  }
  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: 0;
    transition: filter 0.2s ease-in-out;
    
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
