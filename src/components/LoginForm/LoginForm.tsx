import React from 'react';
import {Link} from 'react-router-dom';

import {
    AdminFormBlock,
    ConcatButton,
    Title,
    AdminFormBody,
    BlockInputPlaceholder,
    BlockInputPassword,
    AdminFormLink,
} from './styled';

const LoginForm: React.FC = () => {

  return (
    // <LoginWrapper>
      <AdminFormBlock>
        <Title>Login</Title>
        <AdminFormBody>
          <form>
            <BlockInputPlaceholder>
              <input
                  type="text"
                  required
                  placeholder={"E-mail"}
              />
            </BlockInputPlaceholder>
            {/* <MessageError>'pls'</MessageError> */}
            <BlockInputPassword>
              <input
                  // type={values.showPassword ? "text" : "password"}
                  required
                  placeholder={"Password"}
              />
              {/* <IconSeeYou
                  open={values.showPassword}
                  onClick={handleClickShowPassword}
              /> */}
            </BlockInputPassword>
            {/* <MessageError>{form.formState.errors.password?.message}</MessageError> */}
            {/* <MessageError>{error}</MessageError> */}
            <ConcatButton
                type="submit"
            >Login</ConcatButton>
          </form>
        </AdminFormBody>
        <AdminFormLink>
          <Link to={'/regitration'}>Create account?</Link>
        </AdminFormLink>
      </AdminFormBlock>
    // </LoginWrapper>
      
  );

};

export default LoginForm;
