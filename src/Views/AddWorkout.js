import React, { useEffect, useState } from "react";
import { Button, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";

export default function AddWorkout() {

    const [equipmentName, setEquipmentName] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const clientId = "7DQKcAJmn2FvDtTVYQyu"
    const navigate = useNavigate();

    async function addPost() {
        await addDoc(collection(db, "workout_sessions"), { equipmentName, sets, reps, clientId });
        navigate("/");
    }

    return (
        <Container>
            <h1 style={{ marginBlock: "1rem" }}>Add Post</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exerciseName">
                    <Form.Label>Exercise Name: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Exercise Name"
                        value={equipmentName}
                        onChange={(text) => setEquipmentName(text.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="sets">
                    <Form.Label>Sets: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Number of Sets"
                        value={sets}
                        onChange={(text) => setSets(text.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="reps">
                    <Form.Label>Reps: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Number of Reps"
                        value={reps}
                        onChange={(text) => setReps(text.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={async (e) => addPost()}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}