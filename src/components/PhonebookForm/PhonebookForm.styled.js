import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 400px;
  border: 1px solid #000;
  padding: 20px;
  margin-bottom: 32px;
`;

export const LabelName = styled.label`
  display: block;
  font-size: 25px;

  :not(:first-of-type) {
    margin-top: 20px;
  }
`;

export const NameInput = styled.input`
  margin-top: 15px;
  display: block;
  font-size: 16px;
  padding: 4px;
`;

export const Button = styled.button`
  display: block;
  padding: 4px;
  margin-top: 32px;
  cursor: pointer;
`;
