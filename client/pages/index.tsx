import { ApolloProvider } from '@apollo/client';
import styled from 'styled-components';
import apolloClient from '../lib/apolloClient';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Box = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Home: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Container>
        <Box>
          <h2>Todoリスト</h2>
          <TodoList />
          <h2>Todo追加</h2>
          <AddTodo />
        </Box>
      </Container>
    </ApolloProvider>
  );
};

export default Home;
