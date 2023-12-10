"use client";

import { useSession } from "next-auth/react";
import ConversationItem from "./Sections/ConversationItem";
import NotesItem from "./Sections/NotesItem";
import Search from "./Sections/Search";
import Section from "./Sections/Section";
import { useEffect } from "react";

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

const notes = [
  { id: 1, title: "A couple of words" },
  { id: 2, title: "Another example" },
  { id: 3, title: "Lorem Ipsum" },
  { id: 4, title: "Random Text" },
  { id: 5, title: "Placeholder Data" },
  { id: 6, title: "Sample Content" },
  { id: 7, title: "Mock Data" },
  { id: 8, title: "Test Item" },
  { id: 9, title: "Demo Text" },
  { id: 10, title: "Placeholder Title" },
];

export default function LeftSidebar() {
  useEffect(() => {
    const res = fetch("api/collections", {
      credentials: "include",
    });
  }, []);
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-1/7 p-4 hidden md:block">
      <Section title="Conversations">
        {conversations.map((conversation) => (
          <ConversationItem key={conversation.id} title={conversation.title} />
        ))}
      </Section>
      <Section title="Notes" header={<Search />}>
        {notes.map((note) => (
          <NotesItem key={note.id} title={note.title} />
        ))}
      </Section>
    </div>
  );
}
