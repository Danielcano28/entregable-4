const Header = ({ handelOpenModal }) => {
  return (
    <header className="flex justify-between p-2">
      <h1 className="text-xl font-bold">CRUD users</h1>
      <button
        onClick={handelOpenModal}
        className="bg-blue-500 text-white p-1 px-4  font-semibold rounded-s-sm hover:bg-blue-700 transition-colors"
      >
        add user
      </button>
    </header>
  );
};
export default Header;
