import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, collection, getDocs, query, deleteDoc } from "firebase/firestore";

export default function WorkoutDetails() {
    const [workoutName, setWorkoutName] = useState([]);
    const [equipmentName, setEquipmentName] = useState([]);
    const [sets, setSets] = useState([]);
    const [reps, setReps] = useState([]);

    const params = useParams();
    const id = params.workoutId;
    const navigate = useNavigate();

    async function getWorkout(id) {
        const workoutDocument = await getDoc(doc(db, "workout_sessions", id));
        const workout = workoutDocument.data();
        console.log(workout)

        setWorkoutName(workout.workoutName)
        setEquipmentName(workout.equipmentName);
        setSets(workout.sets);
        setReps(workout.reps);

    }

    async function deleteWorkout(id) {
        await deleteDoc(doc(db, "workout_sessions", id));
        navigate("/");
    }

    useEffect(() => {
        getWorkout(id);
    }, [id]);

    return (
        <>
            Workout: {workoutName} <br />
            Exercise: {equipmentName} <br />
            Sets: {sets} <br />
            Reps: {reps} <br />

            <Link
                to={`/workout/${id}/edit`}
                style={{
                    marginLeft: "1rem",
                    marginTop: "2rem",
                }}
            >
                Edit
                <br />
            </Link>

            <Link
                onClick={() => deleteWorkout(id)}
                style={{
                    marginLeft: "1rem",
                    marginTop: "2rem",
                }}
            >
                Delete
                <br />
            </Link>
        </>
    );
};