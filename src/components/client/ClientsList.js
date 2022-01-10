import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
const ClientsList = ({ clientList }) => {
  const editClient = (id) => {
    console.log("update", id);
  }

  const deleteClient = (id) => {
    console.log("delete", id);
  }
  return (
    <Container fluid="md">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Company</th>
            <th scope="col">email</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {clientList.map((user, index) => (
            <tr key={user.name}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.company}</td>
              <td>{user.email}</td>
              <td>
                <Button className="btn-primary" onClick={() => {editClient(index)}} >Edit...</Button>{" "}
                <Button className="btn-danger"  onClick={() => {deleteClient(index)}} >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ClientsList;
