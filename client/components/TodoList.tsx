import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

const GET_TODOS = gql`
  query {
    todos {
      id
      text
      done
      user {
        name
      }
    }
  }
`;

const TodoItem = styled.li`
  margin-bottom: 10px;
`;

const TodoList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <ul>
      {data.todos.map(({ id, text }: { id: number, text: string }) => (
        <TodoItem key={id}>{text}</TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
