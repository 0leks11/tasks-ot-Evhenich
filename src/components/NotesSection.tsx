import NotesItem from "./NotesItem";

export default function NotesSection() {
  // Dummy data for notes titles
  const notes = [
    { id: 1, title: "What is NIH" },
    { id: 2, title: "Who gets type 2 diabetes" },
    // Add more notes here
  ];

  return (
    <div className="h-[50%] bg-yellow-100">
      {/* {notes.map((conversation) => (
        <li key={conversation.id}>
          <ConversationItem
            title={conversation.title}
            isActive={conversation.id === 1} // Example condition for active state
          />
        </li>
      ))} */}
    </div>
  );
}
