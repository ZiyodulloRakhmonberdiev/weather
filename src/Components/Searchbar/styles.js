import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 7px;
  margin-left: 20px;
  border-bottom: 1px solid #a5cbe2;
`;

export const Input = styled.input`
  background-color: transparent;
  padding: 1rem 1rem 0 0;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  &::placeholder {
    color: #a5cbe2;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #f3f3f4;
  cursor: pointer;
  outline: none;
  @media only screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;
