import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, ListGroup, Spinner } from "react-bootstrap";

import { fetchUsers } from "../services/userService";
import { setUsers, startLoading } from "../redux/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);

  useEffect(() => {
    const loadUsers = async () => {
      dispatch(startLoading());
      const data = await fetchUsers();
      dispatch(setUsers(data));
    };
    loadUsers();
  }, [dispatch]);

  return (
    <Container className="d-flex justify-content-center mt-4 mb-5">
      <Card style={{ width: "500px" }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-3">
            User List
          </Card.Title>

          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <ListGroup variant="flush">
              {users.map((user) => (
                <ListGroup.Item key={user._id}>
                  <strong>{user.name}</strong>
                  <br />
                  <small className="text-muted">{user.email}</small>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserList;
