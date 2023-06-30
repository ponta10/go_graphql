import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0070f3;
  color: white;
  cursor: pointer;
`;

const AddTodo: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [createTodo, { data }] = useMutation(CREATE_TODO);

  const onSubmit = handleSubmit(({ text, userId }) => {
    createTodo({ variables: { text, userId } });
    reset();
  });

  return (
    <Form onSubmit={onSubmit}>
      <Input {...register('text')} placeholder="Todo text" />
      <Input {...register('userId')} placeholder="User ID" />
      <Button type="submit">Add Todo</Button>
      {data && <p>Todo added: {data.createTodo.text}</p>}
    </Form>
  );
};

export default AddTodo;
