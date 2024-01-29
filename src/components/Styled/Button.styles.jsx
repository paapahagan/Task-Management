import styled from "styled-components";

export const PrimaryButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;
  padding: 10px 6px;
  &:hover {
    background-color: #e85a4f;
    border: none;
    color: white;
    transition: 0.6s ease-out;
  }
`;
