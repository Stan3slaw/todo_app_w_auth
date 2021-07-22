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

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('The first name is required.')
    .min('3', 'Too short.')
    .max('25', 'Too long.'),
  lastName: Yup.string()
    .required('The last name is required.')
    .min('3', 'Too short.')
    .max('25', 'Too long.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The password is required.')
    .min('8', 'The password too short'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const SignUp = () => {
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(actions.signUp(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormWrapper>
          <Heading size='h1' color='white' noMargin>
            Sign up
          </Heading>
          <Heading size='h4' color='white' bold>
            Please fill the fields for signup
          </Heading>

          <StyledForm>
            <Field
              type='text'
              name='firstName'
              placeholder='Your first name...'
              component={Input}
            />
            <Field
              type='text'
              name='lastName'
              placeholder='Your last name...'
              component={Input}
            />
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
            <Field
              type='password'
              name='confirmPassword'
              placeholder='Re-type your password...'
              component={Input}
            />
            <Button
              disabled={!(isValid && dirty) || isSubmitting}
              loading={loading ? 'Signing up' : null}
              type='submit'
            >
              Sign up
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

export default SignUp;
