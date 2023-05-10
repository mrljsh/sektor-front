import { FC } from "react";
import styled from "styled-components";

const Login: FC = () => {
  return (
    <Container>
      <img src="/sektor44-logo.png" alt="Sektor44 logo" />
      <Form>
        <p>Login</p>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Log in</Button>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > * {
    margin-bottom: 10px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #fff;

  > p {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 16px;
  }
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid #ddd;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  background-color: #ffd400;
  color: white;
  padding: 1rem;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: #ffbb00;
  }
`;
