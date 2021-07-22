import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import styled from 'styled-components';

import Heading from '../../components/Headings/Heading';
import Spinner from '../../components/Spinner/Spinner';
import { Container } from '../../layouts/elements';
import InputTodo from './InputTodo/InputTodo';
import Todo from './Todo/Todo';
import Button from '../../components/Button/Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 6rem);
  align-self: flex-start;
  //background-color: var(--color-mainBg);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 4rem;
`;
const Content = styled.div`
  width: 100%;
  max-width: 50rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Todos = () => {
  const [isAdding, setIsAdding] = React.useState(false);
  const userId = useSelector(({ firebase }) => firebase.auth.uid);
  useFirestoreConnect([`todos/${userId}`]);
  const todos = useSelector(({ firestore }) => firestore.data.todos);
  let content;
  if (!todos) {
    content = (
      <Content>
        <Spinner />
      </Content>
    );
  } else if (!todos[userId] || !todos[userId].todos) {
    content = (
      <Content>
        <Heading size='h2'>You have no todos!</Heading>
      </Content>
    );
  } else if (todos[userId].todos.length === 0) {
    content = (
      <Content>
        <Heading size='h2'>You have no todos!</Heading>
      </Content>
    );
  } else {
    content = (
      <Content>
        {todos[userId].todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </Content>
    );
  }
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading size='h1' noMargin>
            Your todos
          </Heading>
          <Heading bold size='h4'>
            Here are your todos
          </Heading>
          <Button contain onClick={() => setIsAdding(true)}>
            Add Todo
          </Button>
          <InputTodo opened={isAdding} close={() => setIsAdding(false)} />
          {content}
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Todos;
