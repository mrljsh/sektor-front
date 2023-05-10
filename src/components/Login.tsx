import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";
import postAuth from "../utils/Auth";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.token) {
      navigate("/");
    }
  }, [auth?.token, navigate]);

  const handleChangeToken = (token: string) => {
    auth?.updateToken(token);
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const token = await postAuth({
      username: username,
      password: password,
    }).catch((err) => setErrorMessage(err.message));

    if (typeof token === "string") {
      handleChangeToken(await token);
    }

    setLoading(false);
  };

  return (
    <Container>
      <img src="/sektor44-logo.png" alt="Sektor44 logo" />
      <Form onSubmit={handleSubmit}>
        <p>Login</p>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUserChange}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Log in"}
        </Button>
        <ErrSpan>{errorMessage}</ErrSpan>
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
  margin-bottom: 10px;

  &:hover {
    background-color: #ffbb00;
  }

  &:disabled {
    background-color: #d4d4d4;
    cursor: default;
  }
`;

const ErrSpan = styled.span`
  color: red;
`;
