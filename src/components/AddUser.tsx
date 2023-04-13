import { useState } from "react";
import styled from "styled-components";

const AddUser = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [student, setStudent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${name}, ${mail}, ${student}`);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="full-name">Full Name:</Label>
        <Input
          type="text"
          id="full-name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="is-student">Student:</Label>
        <Checkbox
          type="checkbox"
          id="is-student"
          name="isStudent"
          checked={student}
          onChange={(event) => setStudent(event.target.checked)}
        />
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  min-width: 400px;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ffd400;
  color: #fff;
  font-weight: 600;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: #ffdc2a;
  }
`;

export default AddUser;
