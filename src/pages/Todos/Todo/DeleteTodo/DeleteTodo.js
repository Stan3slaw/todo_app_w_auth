import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Modal from '../../../../components/Modal/Modal';
import Button from '../../../../components/Button/Button';
import Heading from '../../../../components/Headings/Heading';

import * as actions from '../../../../store/actions';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const TodoWrapper = styled.div`
  width: 100%;
  margin: 2rem 2rem;
  color: var(--color-white);
  text-align: center;
  word-wrap: break-word;
`;

const DeleteTodo = ({ open, close, todo }) => {
  const dispatch = useDispatch();
  return (
    <Modal opened={open} close={close}>
      <Heading noMargin size='h1' color='white'>
        Delete
      </Heading>
      <Heading bold size='h4' color='white'>
        Are you sure about that?
      </Heading>
      <TodoWrapper>{todo.todo}</TodoWrapper>
      <ButtonsWrapper>
        <Button
          contain
          type='submit'
          onClick={() => dispatch(actions.deleteTodo(todo.id))}
          //   disabled={!(isValid && dirty) || isSubmitting}
          //   loading={loading ? 'Adding...' : null}
        >
          Delete
        </Button>
        <Button contain type='button' onClick={() => close(false)}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </Modal>
  );
};

export default DeleteTodo;
