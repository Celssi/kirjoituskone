import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  width: 100%;
  max-width: 150px;
  height: 40px;
  cursor: pointer;
  margin-top: 20px;

  :hover {
    background-color: palevioletred;
    color: #eee;
  }
`;

export const Input = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  background-color: var(--secondary);
  color: #eee;
  font-size: 1.5rem;
  padding: 5px;
`;

export const FormGroup = styled.div`
  width: 200px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextArea = styled.textarea`
  height: 70vh;
  width: 100%;
  max-width: 800px;
  border-radius: 5px;
  resize: none;
  margin-top: 20px;
  line-height: 3rem;
  font-size: 1.3rem;
  background-color: var(--secondary);
  color: #eee;
  padding: 1rem;

  ::-webkit-scrollbar {
    background-color: #282c34;
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background-color: #282c34;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border-radius: 16px;
    border: 4px solid #282c34;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  @media (max-width: 800px) {
    width: calc(100% - 30px);
  }
`;

export const Label = styled.label`
  color: #eee;
  margin-bottom: 4px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const SubHeader = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(5px + 1vmin);
  color: white;
`;
