import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apolloClient';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const Home: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <h2>Todoリスト</h2>
        <TodoList />
        <h2>Todo追加</h2>
        <AddTodo />
      </div>
    </ApolloProvider>
  );
};

export default Home;
