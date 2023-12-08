export interface ConversationItemProps {
  title: string;
}

const ConversationItem = ({ title }: ConversationItemProps) => {
  return (
    <div className="group flex flex-row items-center md:pl-4 hover:bg-violet-100 py-2 cursor-pointer">
      <div className="border-[1.5px] rounded-se-[3px] rounded-es-[3px] w-[13px] h-[11px] group-hover:bg-purple-500 group-hover:border-purple-500"></div>
      <span className="text-black truncate max-w-[calc(100%-90px)] w-full relative xl:left-6 lg:left-4 md:left-3 left-2 group-hover:font-medium">
        {title}
      </span>
    </div>
  );
};

export default ConversationItem;
