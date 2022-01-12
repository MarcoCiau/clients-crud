import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ClientModal from "./ClientModal";
const AddClient = (props) => {
  const [show, setShow] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    company: "",
    rfc: "",
    email: "",
    phone: "",
  });
  const { name, company, rfc, email, phone } = clientInfo;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
    props.addNewClient(clientInfo);
    setClientInfo({
      name: "",
      company: "",
      rfc: "",
      email: "",
      phone: "",
    });
  };

  const handleNameChange = (e) => {
    setClientInfo({
      ...clientInfo,
      name: e.target.value,
    });
  };

  const handleCompanyChange = (e) => {
    setClientInfo({
      ...clientInfo,
      company: e.target.value,
    });
  };

  const handleRfcChange = (e) => {
    setClientInfo({
      ...clientInfo,
      rfc: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setClientInfo({
      ...clientInfo,
      email: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setClientInfo({
      ...clientInfo,
      phone: e.target.value,
    });
  };

  return (
    <Container fluid="md">
      <div className="d-flex flex-row-reverse m-4">
        <Button variant="primary" onClick={handleShow}>
          {props.btnTitle}
        </Button>
      </div>
      <ClientModal enable={show} closeFnc={handleClose} saveFnc={handleSave}>
        <Form>
          <Form.Group className="mb-3" controlId="clientName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="clientCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Company"
              value={company}
              onChange={handleCompanyChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="clientRFC">
            <Form.Label>RFC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter RFC"
              value={rfc}
              onChange={handleRfcChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="clientEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="clientPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={handlePhone}
            />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
        </Form>
      </ClientModal>
    </Container>
  );
};

export default AddClient;
