const NotesItem = ({ title }) => {
  return (
    <div className="group flex flex-row items-center md:pl-4 hover:bg-violet-100 py-2 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-6 w-6 text-violet-800 mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        ></path>
      </svg>
      <span className="text-black truncate max-w-[calc(100%-90px)] w-full relative xl:left-6 lg:left-4 md:left-3 left-2 group-hover:font-medium">
        {title}
      </span>
    </div>
  );
};

export default NotesItem;
