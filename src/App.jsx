import { useEffect, useState } from "react";
import "./App.css";
import { BASE_URL, EMPTY_FORM_VALUES } from "./constants/users";
import axios from "axios";

import UserCard from "./components/UserCard";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UsersList from "./components/UsersList";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [idUsersToEdit, setIdUsersToEdit] = useState(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (idUsersToEdit) {
      updateUsers(data);
    } else {
      createUser(data);
    }
  };

  const handelOpenModal = () => {
    setIsShowModal(true);
  };

  const handelCloseModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FORM_VALUES);
    setIdUsersToEdit(null);
  };

  const createUser = (data) => {
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        setIsShowModal(false);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUsers = (id) => {
    axios
      .delete(BASE_URL + `/users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUsers = (data) => {
    axios
      .put(BASE_URL + `/users/${idUsersToEdit}/`, data)
      .then(() => {
        getAllUsers();
        handelCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const handleClickUpdate = (userUpdate) => {
    handelOpenModal();
    reset(userUpdate);
    setIdUsersToEdit(userUpdate.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="min-h-screen">
      <Header handelOpenModal={handelOpenModal} />
      <UserCard
        isShowModal={isShowModal}
        handelCloseModal={handelCloseModal}
        handleSubmit={handleSubmit}
        register={register}
        submit={submit}
        idUsersToEdit={idUsersToEdit}
        errors={errors}
      />
      <UsersList
        users={users}
        deleteUsers={deleteUsers}
        handleClickUpdate={handleClickUpdate}
      />
    </main>
  );
}

export default App;
