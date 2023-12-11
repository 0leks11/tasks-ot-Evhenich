import { ReactNode } from "react";

export interface SectionItemProps {
  title: string;
  children?: ReactNode;
}

const SectionItem = ({ title, children }: SectionItemProps) => {
  return (
    <div className="group flex flex-row items-center md:pl-4 hover:bg-violet-100 py-2 cursor-pointer">
      {children}
      <span className="text-black truncate max-w-[calc(100%-90px)] w-full relative xl:left-6 lg:left-4 md:left-3 left-2 group-hover:font-medium">
        {title}
      </span>
    </div>
  );
};

export default SectionItem;
