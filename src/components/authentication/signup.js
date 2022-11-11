import { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2em;
  align-items: center;
  justify-content: center;
`;
export const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmantionRef = useRef(null);
  const [error, setError] = useState(false);
  const { signup, currentUser } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [email, password, passwordConfirmantion] = [
      emailRef.current.value,
      passwordRef.current.value,
      passwordConfirmantionRef.current.value,
    ];
    if (password !== passwordConfirmantion) {
      return setError("passwords do not match");
    }
    try {
      setError(undefined);
      await signup(email, "123Qwerty$#");
      console.log("this is here");
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
            <h2>Signup</h2>
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
              <Form.Group id="password-confirmation">
                <Form.Label>password Confirmantion</Form.Label>
                <Form.Control type="password" ref={passwordConfirmantionRef} />
              </Form.Group>
              <Button className="w-100 mt-4" type="submit">
                Signup
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already Have account?<Link to="/login"> Log in </Link>
        </div>
      </div>
    </Container>
  );
};
