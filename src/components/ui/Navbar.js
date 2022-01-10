import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const navbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Clients</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
