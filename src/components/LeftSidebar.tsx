"use client";

import ConversationItem from "./Sections/ConversationItem";
import NotesItem from "./Sections/NotesItem";
import Search from "./Sections/Search";
import Section from "./Sections/Section";
import { useEffect, useState } from "react";

type Conversation = {
  id: string;
  name: string;
  updatedAt: string;
};

type Note = {
  id: string;
  name: string;
};

export default function LeftSidebar() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);

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

    const fetchNotes = async () => {
      const res = await fetch("api/notes", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setNotes(data.data.content);
      } else {
        console.log("Error with fetchNotes");
      }
    };

    fetchConversations();
    fetchNotes();
  }, []);

  return (
    <div className="w-full md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-1/7 p-4 hidden md:block">
      <Section title="Conversations">
        {conversations.map((conversation) => (
          <ConversationItem key={conversation.id} title={conversation.name} />
        ))}
      </Section>
      <Section title="Notes">
        {notes.map((note) => (
          <NotesItem key={note.id} title={note.name} />
        ))}
      </Section>
    </div>
  );
}
