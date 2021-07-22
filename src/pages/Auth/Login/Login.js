import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../../store/actions';

import { FormWrapper, StyledForm } from '../../../layouts/elements';
import Input from '../../../components/Forms/Input/Input';
import Button from '../../../components/Button/Button';
import Heading from '../../../components/Headings/Heading';
import Message from '../../../components/Message/Message';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The password is required.')
    .min('8', 'Too short.'),
});

const Login = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(({ auth }) => auth);
  React.useEffect(() => {
    return () => {
      dispatch(actions.clean());
    };
  }, [dispatch]);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(actions.signIn(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormWrapper>
          <Heading size='h1' color='white' noMargin>
            Login
          </Heading>
          <Heading size='h4' color='white' bold>
            Please fill the fields for login
          </Heading>

          <StyledForm>
            <Field
              type='email'
              name='email'
              placeholder='Your email...'
              component={Input}
            />
            <Field
              type='password'
              name='password'
              placeholder='Your password...'
              component={Input}
            />
            <Button
              disabled={!(isValid && dirty) || isSubmitting}
              loading={loading ? 'logging in' : null}
              type='submit'
            >
              Login
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
