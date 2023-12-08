const NotesItem = ({ title, isActive }) => {
  return (
    <div
      className={`flex items-center p-2 text-sm font-medium rounded-lg cursor-pointer ${
        isActive ? "bg-blue-500 text-white" : "text-gray-900 hover:bg-gray-100"
      }`}
    >
      <div className="flex-1 truncate">{title}</div>
      {isActive && (
        <span className="inline-block ml-2 bg-blue-200 rounded-full text-blue-800 text-xs font-semibold px-2.5 py-0.5">
          Active
        </span>
      )}
    </div>
  );
};

export default NotesItem;
