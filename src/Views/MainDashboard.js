import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function MainDashboard() {

    const [clients, getClients] = useState([]);

    async function getAllClients() {
        const query = await getDocs(collection(db, "clients"));
        const allClients = query.docs.map((doc) => {
            console.log(doc.data());
            return { id: doc.id, ...doc.data() };
            // return {id: 'fYwQrDpg7JVtx0cjqthc', caption: 'Ronaldo', image: 'https://zca.sg/img/2'}
        });
        getClients(allClients);
    }


    useEffect(() => {
        getAllClients();
    }, []);

    const ClientList = () => {
        return clients.map((client, index) => <ClientLink key={index} client={client} />);
    };

    return (
        <div class="container" id=" main">
            < div class="row" >
                <div class="col-md-3" id="maincol">
                    <h5>List of Clients:</h5>
                    <ClientList />
                </div>
                <div class="col-md-9">

                    <div class="row" >
                        <div class="col-12" id="maincol">
                            <h5>Current Schedule:</h5>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-3" id="maincol">
                            <h5>Upcoming Payment / Renewal</h5>
                        </div>
                        <div class="col-lg-3" id="maincol">
                            <h5>Upcoming Program Updates</h5>
                        </div>
                        <div class="col-lg-6" id="maincol">
                            <h5>Notification</h5>
                        </div>
                    </div>


                </div>
            </div >

        </div >
    );
}

function ClientLink({ client }) {
    const { name, id } = client;
    return (

        <Link
            to={`client/${id}`}
            style={{
                width: "18rem",
                marginLeft: "1rem",
                marginTop: "2rem",
            }}
        >
            {name}
            <br />
        </Link>
    );
}