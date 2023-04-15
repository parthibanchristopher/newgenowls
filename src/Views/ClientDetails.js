import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";


export default function ClientDetails() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [fatPercentage, setFatPercentage] = useState(0);
    const [goals, setGoals] = useState("");
    const [sessionPaid, setSessionPaid] = useState(true);
    const [sports, setSports] = useState("");

    const [workouts, setWorkouts] = useState([]);

    const params = useParams();
    const id = params.clientId;
    const navigate = useNavigate();

    async function getWorkoutSessions(id) {
        const querySnapshot = await getDocs(query(collection(db, "workout_sessions"), where("clientId", "==", id)));
        console.log(id);
        const workoutSessions = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        workoutSessions.sort((a, b) => { return b.workoutName - a.workoutName })
        console.log(workoutSessions)
        setWorkouts(workoutSessions);
    }

    async function getClient(id) {
        const clientDocument = await getDoc(doc(db, "clients", id));
        const client = clientDocument.data();
        console.log(client)

        setName(client.name);
        setAge(client.age);
        setGender(client.gender);
        setEmail(client.email);
        setHeight(client.height);
        setWeight(client.weight);
        setFatPercentage(client.fat_percentage);
        setGoals(client.goals);
        setSessionPaid((client['session_paid']).toString());
        setSports(client.sports);
    }

    useEffect(() => {
        getClient(id);
        getWorkoutSessions(id);
    }, [id]);

    const ClientData = () => {
        return (
            <>
                name = {name} <br />
                age = {age} <br />
                gender = {gender} <br />
                email = {email} <br />
                height = {height} <br />
                weight = {weight} <br />
                fat percentage = {fatPercentage} <br />
                goals = {goals} <br />
                sessions paid = {sessionPaid} <br />
                sports = {sports} <br />

            </>
        );
    };

    const WorkoutData = (workoutSession) => {
        const { workoutName, id } = workoutSession.workoutSession;
        return (

            <Link
                to={`workout/${id}`}
                style={{
                    marginLeft: "1rem",
                    marginTop: "2rem",
                }}
            >
                {workoutName}
                <br />
            </Link>
        );
    };

    const WorkoutList = () => {
        return workouts.map((workout, index) => <WorkoutData key={index} workoutSession={workout} />);
    };

    return (
        <Container>

            <ClientData />
            <WorkoutList />
        </Container>
    );


}