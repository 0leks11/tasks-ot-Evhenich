import { useState } from "react";
import ConversationItem from "./ConversationItem";

export default function ConversationSection() {
  // Dummy data for conversation titles
  const conversations = [
    { id: 1, title: "What is NIH" },
    { id: 2, title: "How to Bake a Cake" },
    { id: 3, title: "Introduction to JavaScript" },
    { id: 4, title: "Exploring National Parks" },
    { id: 5, title: "The Art of Photography" },
    { id: 6, title: "History of Space Exploration" },
    { id: 7, title: "Healthy Eating Habits" },
    { id: 8, title: "Traveling on a Budget" },
    { id: 9, title: "Beginner's Guide to Yoga" },
    { id: 10, title: "Famous Works of Literature" },
    { id: 11, title: "Mastering Chess Strategies" },
    { id: 12, title: "DIY Home Improvement Projects" },
    { id: 13, title: "The World of Birds" },
    { id: 14, title: "Learning a New Language" },
    { id: 15, title: "Financial Planning 101" },
  ];

  return (
    <div className="flex flex-col h-[50%] bg-white">
      <h1 className="p-2 text-black font-bold">Conversations</h1>
      <div className="flex-grow overflow-auto">
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            title={conversation.title}
            isActive={conversation.id === 1} // Example condition for active state
          />
        ))}
      </div>
    </div>
  );
}
