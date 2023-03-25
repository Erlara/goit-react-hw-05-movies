import { Button, Form, Input } from './MovieForm.styled';

const MovieForm = ({ onSubmit }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input type="text" name="search" />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default MovieForm;
