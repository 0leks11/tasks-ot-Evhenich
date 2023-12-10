export interface MyLibraryItemProps {
  title: string;
}

const MyLibraryItem = ({ title }: MyLibraryItemProps) => {
  return (
    <div className="group flex flex-row items-center md:pl-4 hover:bg-violet-100 py-2 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        className="w-6 h-6 -scale-x-100 scale-y-100 mr-2 stroke-violet-800"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
        <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
        <path d="M9 8h6"></path>
      </svg>
      <span className="text-black truncate max-w-[calc(100%-90px)] w-full relative xl:left-6 lg:left-4 md:left-3 left-2 group-hover:font-medium">
        {title}
      </span>
    </div>
  );
};

export default MyLibraryItem;
