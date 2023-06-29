import { useQuery, gql } from '@apollo/client';

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

const TodoList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <ul>
      {data.todos.map(({ id, text }: { id: number, text: string }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
