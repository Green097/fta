import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";

// import { LoginContext } from "../context/LoginContext";

const Login = () => {
  // const { signin, user } = useContext(LoginContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const uName = e.target.brugernavn.value;
    const pass = e.target.password.value;

    // signin(uName, pass);
  };

  return (
    <Container>
      <h2>Login</h2>
      {/* {!user && ( */}
        <Form className="mb-2" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="brugernavn"
              placeholder="Username"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      {/* )}
      {
        user && <Navigate to="/admin" replace />
      } */}
    </Container>
  );
};

export default Login;
