import User from "./User";

const UsersList = ({ users, deleteUsers, handleClickUpdate }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_270px)] justify-center max-w-[1000px] mx-auto gap-5 py-10 ">
      {users.map((user) => (
        <User
          key={user.id}
          userinfo={user}
          deleteUsers={deleteUsers}
          handleClickUpdate={handleClickUpdate}
        />
      ))}
    </section>
  );
};
export default UsersList;
