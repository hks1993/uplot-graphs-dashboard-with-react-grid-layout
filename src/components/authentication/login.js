import { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2em;
  align-items: center;
  justify-content: center;
`;
export const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const passwordConfirmantionRef = useRef(null);
  const [error, setError] = useState(false);
  const { login, currentUser } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [email, password] = [
      emailRef.current.value,
      passwordRef.current.value,
    ];

    try {
      setError(undefined);
      await login(email, "123Qwerty$#");
      navigate("/");
    } catch (e) {
      console.error(e);
      setError("signup failed");
    }
  };

  return (
    <Container>
      <div style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2>Login</h2>
            {JSON.stringify(currentUser?.email)}
            {error ? <Alert variant="danger">{error}</Alert> : null}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} />
              </Form.Group>
              <Button className="w-100 mt-4" type="submit">
                Signup
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need to create an account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </Container>
  );
};
