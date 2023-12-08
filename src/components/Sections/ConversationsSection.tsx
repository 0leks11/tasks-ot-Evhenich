import { useState } from "react";
import ConversationItem from "./ConversationItem";

export default function ConversationSection() {
  // const [picked, setPicked] = useState(null);
  // Dummy data for conversation titles
  const conversations = [
    { id: 1, title: "What is NIH" },
    { id: 2, title: "Who gets type 2 diabetes" },
    // Add more conversations here
  ];

  return (
    <div className="h-[50%] bg-white">
      {conversations.map((conversation) => (
        <li key={conversation.id}>
          <ConversationItem
            title={conversation.title}
            isActive={conversation.id === 1} // Example condition for active state
          />
        </li>
      ))}
    </div>
  );
}
