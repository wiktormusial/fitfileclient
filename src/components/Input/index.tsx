import styled from "styled-components";

export const Input = styled.input`
  &[type="file"] {
    border-radius: 5px;
    backgroun: #fafafa;
    margin: 1em;
  }

  &[type="file"]::file-selector-button {
    padding: 16px 32px;
    border: 0;
    border-radius: 5px;
    color: white;
    background: #2196f3;
    cursor: pointer;
    font-weight: bold;
  }
`;
