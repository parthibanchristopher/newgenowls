import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";

export function NavigationBar() {

    return (
        <>
            <Navbar variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="/">New Gen Owls</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">New Client</Nav.Link>
                        <Nav.Link href="/addWorkout">Add Workout</Nav.Link>
                        <Nav.Link href="/">Send Reminder</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};