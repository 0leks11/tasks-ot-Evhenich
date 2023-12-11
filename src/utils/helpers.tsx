import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export const renderSectionContent = (isLoading, items, ItemComponent) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return items.map((item) => <ItemComponent key={item.id} title={item.name} />);
};
