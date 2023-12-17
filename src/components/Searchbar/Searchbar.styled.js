import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  color: #fff;
  background-color: #4682B4;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Field = styled(FormikField)`
  border-radius: 50px 0 0 50px;
  width: 250px;
  height: 35px;
  padding-left: 15px;
  border: none;
`;

export const Button = styled.button`
  border-radius: 0 50px 50px 0;
  height: 35px;
  border: none;
  font-size: 24px;
  color: black;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #87CEEB;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 20px;
  position: absolute;
  bottom: -20px;
`;