import SectionItem from "./SectionItem";

export interface ConversationItemProps {
  title: string;
}

const ConversationItem = ({ title }: ConversationItemProps) => {
  return (
    <SectionItem title={title}>
      <div className="border-[1.5px] rounded-se-[3px] rounded-es-[3px] w-[13px] h-[11px] group-hover:bg-purple-500 group-hover:border-purple-500" />
    </SectionItem>
  );
};

export default ConversationItem;
