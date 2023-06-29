import { useMutation, gql } from '@apollo/client';

const CREATE_TODO = gql`
  mutation {
    createTodo(input: { text: "ゴミ捨て", userId: "1" }) {
      id
      text
      done
    }
  }
`;

const AddTodo: React.FC = () => {
  const [createTodo, { data }] = useMutation(CREATE_TODO);

  return (
    <div>
      <button onClick={() => createTodo()}>Add Todo</button>
      {data && <p>Todo added: {data.createTodo.text}</p>}
    </div>
  );
};

export default AddTodo;
