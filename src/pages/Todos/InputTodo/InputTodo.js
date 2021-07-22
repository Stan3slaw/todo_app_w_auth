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

const InputTodo = ({ editTodo, opened, close }) => {
  const loadingText = editTodo ? 'Editing...' : 'Adding...';
  const dispatch = useDispatch();
  const { error, loading } = useSelector(({ todos }) => todos);
  return (
    <>
      <Modal opened={opened} close={close}>
        <Heading noMargin size='h1' color='white'>
          {editTodo ? 'Edit your todo' : 'Add your new todo'}
        </Heading>
        <Heading bold size='h4' color='white'>
          {editTodo
            ? 'Edit your todo and tap edit'
            : 'Type your todo and press add'}
        </Heading>
        <Formik
          initialValues={{
            todo: editTodo ? editTodo.todo : '',
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // send our todo
            const res = editTodo
              ? dispatch(actions.editTodo(editTodo.id, values))
              : dispatch(actions.addTodo(values));
            if (res) {
              close();
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
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
                  color='main'
                  type='submit'
                  disabled={!isValid || isSubmitting}
                  loading={loading ? loadingText : null}
                >
                  {editTodo ? 'Edit todo' : 'Add todo'}
                </Button>
                <Button
                  type='button'
                  color='main'
                  contain
                  onClick={() => {
                    close();
                    resetForm();
                  }}
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

export default InputTodo;
