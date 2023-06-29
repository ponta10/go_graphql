import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';

const CREATE_TODO = gql`
  mutation CreateTodo($text: String!, $userId: String!) {
    createTodo(input: { text: $text, userId: $userId }) {
      id
      text
      done
    }
  }
`;

interface FormData {
  text: string;
  userId: string;
};

const AddTodo: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [createTodo, { data }] = useMutation(CREATE_TODO);

  const onSubmit = handleSubmit(({ text, userId }) => {
    createTodo({ variables: { text, userId } });
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...register('text')} placeholder="Todo text" />
      <input {...register('userId')} placeholder="User ID" />
      <button type="submit">Add Todo</button>
      {data && <p>Todo added: {data.createTodo.text}</p>}
    </form>
  );
};

export default AddTodo;
