import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {
    AdminFormBlock,
    ConcatButton,
    Title,
    AdminFormBody,
    BlockInputPlaceholder,
    BlockInputPassword,
} from './styled';

const RegistrationForm: React.FC = () => {

  return (
      <AdminFormBlock>
        <Title>Registration</Title>
        <AdminFormBody>
          <form>
            <BlockInputPlaceholder>
              <input
                    type="text"
                    required
                    placeholder={"Name"}
                />
            </BlockInputPlaceholder>
            <BlockInputPlaceholder>
              <input
                  type="text"
                  required
                  placeholder={"E-mail"}
              />
            </BlockInputPlaceholder>
            <BlockInputPassword>
              <input
                  type={"password"}
                  required
                  placeholder={"Password"}
              />
            </BlockInputPassword>
            <ConcatButton
                type="submit"
            >Login</ConcatButton>
          </form>
        </AdminFormBody>
      </AdminFormBlock>      
  );

};

export default RegistrationForm;
