import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { FC } from "react";

export const renderSectionContent = (
  isLoading: boolean,
  items: any[],
  ItemComponent: FC<any>
) => {
  if (isLoading) {
    return <div className="flex items-center justify-center"><LoadingSpinner /></div>;
  }

  return items.map((item) => <ItemComponent key={item.id} title={item.name} />);
};
