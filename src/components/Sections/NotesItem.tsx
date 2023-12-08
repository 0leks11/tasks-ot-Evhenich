const NotesItem = ({ title, isActive }) => {
  return (
    <div
      className={`flex items-center p-2 text-sm font-medium rounded-lg cursor-pointer ${
        isActive ? "bg-blue-500 text-white" : "text-gray-900 hover:bg-gray-100"
      }`}
    >
      <div className="flex-1 truncate">{title}</div>
    </div>
  );
};

export default NotesItem;
