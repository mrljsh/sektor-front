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
      <CheckboxGroup>
        <Label htmlFor="is-student">Student:</Label>
        <Checkbox
          type="checkbox"
          id="is-student"
          name="isStudent"
          checked={student}
          onChange={(event) => setStudent(event.target.checked)}
        />
      </CheckboxGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const CheckboxGroup = styled.div`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: auto 1em;
  gap: 0.5em;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  min-width: 400px;
`;

const Checkbox = styled.input`
  margin: 0;
  font: inherit;
  color: #ffd400;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #ffd400;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
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

  margin: 1rem;
  align-self: center;

  &:hover {
    background-color: #ffdc2a;
  }
`;

export default AddUser;
