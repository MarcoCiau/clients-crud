import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import AddClient from "./AddClient";

const ClientsList = ({ clientList, handleEdit, handleDelete }) => {
  const editClient = (id) => {
    console.log("update", id);
    handleEdit(id);
  }

  const deleteClient = (id) => {
    console.log("delete", id);
    handleDelete(id);
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
            <tr key={user._id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.company}</td>
              <td>{user.email}</td>
              <td>
                {/* <Button className="btn-primary" onClick={() => {editClient(user._id)}} >Edit...</Button>{" "} */}
                <AddClient btnTitle="Edit..." addNewClient={editClient} />{" "}
                <Button className="btn-danger"  onClick={() => {deleteClient(user._id)}} >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ClientsList;
