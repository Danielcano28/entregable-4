import {
  IconBrandAmongUs,
  IconCalendarExclamation,
  IconEdit,
  IconMail,
  IconTrash,
} from "@tabler/icons-react";

const User = ({ userinfo, deleteUsers, handleClickUpdate }) => {
  return (
    <article className="border-2 p-4 rounded-lg grid gap-3 ">
      <h3 className="uppercase font-semibold  items-center justify-center flex gap-2">
        <IconBrandAmongUs className="text-blue-500" size={30} />{" "}
        {userinfo.first_name} {userinfo.last_name}
      </h3>
      <ul className="grid gap-1 text-gray-800">
        <h6 className="flex font-semibold">
          EMAIL
          <IconMail className="text-red-500" />{" "}
        </h6>
        <li>{userinfo.email}</li>
        <h6 className="font-semibold">BIRTHAY</h6>
        <IconCalendarExclamation className="text-blue-500" />
        <li>{userinfo.birthday}</li>
      </ul>

      <div className="flex gap-2 justify-end p-2">
        <button
          onClick={() => handleClickUpdate(userinfo)}
          className="bg-yellow-500 text-white rounded-md"
        >
          <IconEdit size={20} />
        </button>
        <button
          onClick={() => deleteUsers(userinfo.id)}
          className="bg-red-500 text-white rounded-md"
        >
          <IconTrash size={20} />
        </button>
      </div>
    </article>
  );
};
export default User;
