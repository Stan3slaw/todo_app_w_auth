import React from 'react';
import styled from 'styled-components';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import DeleteTodo from './DeleteTodo/DeleteTodo';
import InputTodo from '../InputTodo/InputTodo';

const Wrapper = styled.div`
  word-wrap: break-word;
  width: 100%;
  position: relative;
  padding: 5rem 3rem;
  background-color: var(--color-mainLighter);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  margin-bottom: 3.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-mainDark);
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Todo = ({ todo }) => {
  const [isDeleting, setisDeleting] = React.useState(false);
  const [isEditing, setisEditing] = React.useState(false);

  return (
    <Wrapper>
      {todo.todo}
      <Controls>
        <IconButton onClick={() => setisEditing(true)}>
          <EditIcon fontSize='large' />
        </IconButton>
        <IconButton color='secondary' onClick={() => setisDeleting(true)}>
          <DeleteIcon fontSize='large' />
        </IconButton>
        <DeleteTodo
          todo={todo}
          open={isDeleting}
          close={() => setisDeleting(false)}
        />
        <InputTodo
          editTodo={todo}
          opened={isEditing}
          close={() => setisEditing(false)}
        />
      </Controls>
    </Wrapper>
  );
};

export default Todo;
