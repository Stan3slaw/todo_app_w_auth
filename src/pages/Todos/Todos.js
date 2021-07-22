import React from 'react';
import styled from 'styled-components';

import Heading from '../../components/Headings/Heading';
import { Container } from '../../layouts/elements';
import AddTodo from './AddTodo/AddTodo';
import Todo from './Todo/Todo';

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

const Todos = () => {
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
          <AddTodo />
          <Todo />
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Todos;
