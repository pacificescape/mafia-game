import React from 'react';
import styled from 'styled-components';

// === components ===
import Button from '../Button/Button';
import Input from '../Input/Input';
import Popup from '../Popup/Popup';

// === utils ===
import { buttonReset } from '../../utils/mixins';
import { colors } from '../../utils/variables';

const LoginPopup = ({ active, toggle }) => {
  return (
    <Popup {...{ active, toggle }}>
      <ModalTitle>Вход</ModalTitle>
      <ModalForm>
        <ModalFormItem>
          <ModalFormLabel>Логин</ModalFormLabel>
          <Input type="text" />
        </ModalFormItem>

        <ModalFormItem>
          <ModalFormLabel>Пароль</ModalFormLabel>
          <Input type="password" />
        </ModalFormItem>

        <Button>войти</Button>
        <ModalRegister>регистрация</ModalRegister>
      </ModalForm>
    </Popup>
  );
};

export default LoginPopup;

const { lightgray } = colors;

const ModalTitle = styled.div`
  font-size: 3rem;
  text-align: center;
`;

const ModalForm = styled.form`
  display: flex;
  gap: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;

  input {
    margin-top: 0.5em;
  }
`;

const ModalFormLabel = styled.label`
  display: block;
  text-align: left;
  color: ${lightgray};
`;

const ModalFormItem = styled.div`
  text-align: center;
  width: 100%;
`;

const ModalRegister = styled.button`
  ${buttonReset()}

  background-color: transparent;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`;