import { useState } from "react";
import AddClient from "./AddClient";
import ClientsList from "./ClientsList";
const defaultClients = [
  {
    name: "user1",
    company: "company1",
    rfc: "rfc1",
    email: "email1",
    phone: "phone1",
  },
  {
    name: "user2",
    company: "company2",
    rfc: "rfc2",
    email: "email2",
    phone: "phone2",
  },
  {
    name: "user3",
    company: "company3",
    rfc: "rfc3",
    email: "email3",
    phone: "phone3",
  },
  {
    name: "user4",
    company: "company4",
    rfc: "rfc4",
    email: "email4",
    phone: "phone4",
  },
  {
    name: "user5",
    company: "company5",
    rfc: "rfc5",
    email: "email5",
    phone: "phone5",
  },
];
const Client = () => {
  const [clients, setClients] = useState(defaultClients);
  const addNewClient = (client) => {
    const isEmpty = Object.values(client).every((x) => x === null || x === "");
    if (isEmpty) console.log("Invalid Value");
    else console.log(client);
    setClients([...clients, client]);
  };
  return (
    <div>
      <AddClient addNewClient={addNewClient} />
      <ClientsList clientList={clients} />
    </div>
  );
};

export default Client;
