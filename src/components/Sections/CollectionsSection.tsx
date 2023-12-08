import CollectionItem from "./CollectionItem";

export default function CollectionsSection() {
  // Dummy data for collections titles
  const collections = [
    { id: 1, title: "What is NIH" },
    { id: 2, title: "Who gets type 2 diabetes" },
    // Add more collections here
  ];

  return (
    <div className="h-[50%] bg-black">
      {/* {collections.map((conversation) => (
        <li key={collections.id}>
          <CollectionItem
            title={conversation.title}
            isActive={conversation.id === 1} // Example condition for active state
          />
        </li>
      ))} */}
    </div>
  );
}
