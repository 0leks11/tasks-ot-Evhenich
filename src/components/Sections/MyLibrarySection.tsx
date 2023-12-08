import MyLibraryItem from "./MyLibraryItem";

export default function MyLibrarySection() {
  // Dummy data for collections titles
  const collections = [
    { id: 1, title: "What is NIH" },
    { id: 2, title: "Who gets type 2 diabetes" },
    // Add more collections here
  ];

  return (
    <div className="h-[50%] bg-pink-100">
      {/* {collections.map((conversation) => (
        <li key={collections.id}>
          <MyLibraryItem
            title={conversation.title}
            isActive={conversation.id === 1} // Example condition for active state
          />
        </li>
      ))} */}
    </div>
  );
}
