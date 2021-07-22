import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';

import * as actions from '../../../store/actions';

import Button from '../../../components/Button/Button';
import Heading from '../../../components/Headings/Heading';
import Message from '../../../components/Message/Message';
import Modal from '../../../components/Modal/Modal';
import { StyledForm } from '../../../layouts/elements';
import Input from '../../../components/Forms/Input/Input';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;
const MessageWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  padding: 0 3rem;
`;

const TodoSchema = Yup.object().shape({
  todo: Yup.string().required('The todo is required.').min(3, 'Too short.'),
});

const AddTodo = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(({ todos }) => todos);
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <>
      <Button contain onClick={() => setIsOpened(true)}>
        Add Todo
      </Button>
      <Modal opened={isOpened} close={() => setIsOpened(false)}>
        <Heading noMargin size='h1' color='white'>
          Add your new todo
        </Heading>
        <Heading bold size='h4' color='white'>
          Type your todo and press add
        </Heading>
        <Formik
          initialValues={{
            todo: '',
          }}
          validationSchema={TodoSchema}
          onSubmit={(values, { setSubmitting }) => {
            const res = dispatch(actions.addTodo(values));
            if (res) {
              setIsOpened(false);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <StyledForm>
              <Field
                type='text'
                name='todo'
                placeholder='Write your todo...'
                component={Input}
              />
              <ButtonsWrapper>
                <Button
                  contain
                  type='submit'
                  disabled={!(isValid && dirty) || isSubmitting}
                  loading={loading ? 'Adding...' : null}
                >
                  Add todo
                </Button>
                <Button
                  contain
                  type='button'
                  onClick={() => setIsOpened(false)}
                >
                  Cancel
                </Button>
              </ButtonsWrapper>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default AddTodo;
