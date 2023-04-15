import React, { useEffect, useState } from "react";
import { Button, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { getDoc, updateDoc, collection, doc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage } from "../firebase";

export default function AddWorkout() {
    const params = useParams();
    const id = params.workoutId;

    const [workoutName, setWorkoutName] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const clientId = "7DQKcAJmn2FvDtTVYQyu"
    const navigate = useNavigate();

    async function updateWorkout() {
        await updateDoc(doc(db, "workout_sessions", id), { equipmentName, sets, reps, clientId, workoutName });
        navigate("/");
    }

    async function getWorkout(id) {
        const workoutDocument = await getDoc(doc(db, "workout_sessions", id));
        const workout = workoutDocument.data();
        setWorkoutName(workout.workoutName);
        setEquipmentName(workout.equipmentName);
        setSets(workout.sets);
        setReps(workout.reps);
    }

    useEffect(() => {
        getWorkout(id);
    }, [id]);

    return (
        <Container>
            <h1 style={{ marginBlock: "1rem" }}>Add Post</h1>
            <Form>
                <Form.Group className="mb-3" controlId="workoutName">
                    <Form.Label>Workout Name: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Workout Name"
                        value={workoutName}
                        onChange={(text) => setWorkoutName(text.target.value)}
                    />
                </Form.Group>

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

                <Button variant="primary" onClick={async (e) => updateWorkout()}>
                    Update
                </Button>
            </Form>
        </Container>
    )
}