import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Card, Form, Button } from "react-bootstrap";

import { createUser } from "../services/userService";
import { addUser } from "../redux/userSlice";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = await createUser({ name, email });
    dispatch(addUser(user));
    setName("");
    setEmail("");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "400px" }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            Add User
          </Card.Title>

          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Add User
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserForm;
