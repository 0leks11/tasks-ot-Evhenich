const ConversationItem = ({ title, isActive }) => {
  return (
    <a className="relative flex flex-row items-center md:pl-4 hover:bg-yellow-200">
      <div className="border-[1.5px] rounded-se-[3px] rounded-es-[3px] w-[13px] h-[11px] bg-violet-primary-800 border-violet-primary-800 group-hover:bg-violet-primary-800 group-hover:border-violet-primary-800"></div>
      <span className="text-black truncate max-w-[calc(100%-90px)] w-full relative xl:left-6 lg:left-4 md:left-3 left-2 hover:font-medium">
        {title}
      </span>
    </a>
  );
};

export default ConversationItem;
