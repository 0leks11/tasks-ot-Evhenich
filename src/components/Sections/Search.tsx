const Search = ({}) => {
  return (
    <div className="relative px-2 py-2">
      <input
        type="search"
        className="block w-full pl-4 pr-10 py-2 border-2 border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition duration-150 ease-in-out"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg
          className="h-5 w-5 text-gray-400 focus:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Search;
