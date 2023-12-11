"use client";

import { useSession } from "next-auth/react";
import ConversationItem from "./Sections/ConversationItem";
import NotesItem from "./Sections/NotesItem";
import Search from "./Sections/Search";
import Section from "./Sections/Section";
import { useEffect, useState } from "react";

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
type Conversations = {
  id: string;
  name: string;
  updatedAt: string;
};

export default function LeftSidebar() {
  const [conversations, setConversations] = useState<Conversations[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const res = await fetch("api/conversations", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setConversations(data.data.content);
      } else {
        console.log("Error with fetchConversations");
      }
    };
    fetchConversations();
  }, []);

  return (
    <div className="w-full md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-1/7 p-4 hidden md:block">
      <Section title="Conversations">
        {conversations.map((conversation) => (
          <ConversationItem key={conversation.id} title={conversation.name} />
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
