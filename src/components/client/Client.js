import axios from "axios";
import { useState, useEffect } from "react";
import AddClient from "./AddClient";
import ClientsList from "./ClientsList";

const Client = () => {
  const apiURl  = "http://192.168.1.108:4000/api/v1/client/";

  const [clients, setClients] = useState([]);

  const addNewClient = (client) => {
    const isEmpty = Object.values(client).every((x) => x === null || x === "");
    if (isEmpty) console.log("Invalid Value");
    else {
      console.log(client);
      clientsPost(client);
    }
  };

  //api methods
  const clientsGet = async () => {
    const response = await axios.get(apiURl);
    console.log(response.data.clients);
    setClients(response.data.clients);
  };

  const clientsPost = async (payload) => {
    const response = await axios.post(
      apiURl,
      payload
    );
    if (response.status === 200) {
      await clientsGet();
    }
  };
  
  const clientsUpdate = async (payload) => {
    console.log("clientsUpdateHandler");
    return;
    const response = await axios.put(
      apiURl,
      payload
    );
    if (response.status === 200) {
      await clientsGet();
    }
  };

  const clientsDelete = async (id = "") => {
    const response = await axios.delete(
      `${apiURl}${id}`
    );
    console.log(response);
    if (response.status === 200) {
      await clientsGet();
    }
  };

  useEffect(() => {
    clientsGet();
  }, []);

  return (
    <div>
      <AddClient btnTitle="Add User" addNewClient={addNewClient} />
      <ClientsList handleEdit={clientsUpdate} handleDelete={clientsDelete} clientList={clients} />
    </div>
  );
};

export default Client;
