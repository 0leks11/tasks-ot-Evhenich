"use client";

import { useDataFetching } from "@/utils/hooks";
import ConversationItem from "./Sections/ConversationItem";
import NotesItem from "./Sections/NotesItem";
import Section from "./Sections/Section";
import { useState } from "react";

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

  useDataFetching(setConversations, "conversations");
  useDataFetching(setNotes, "notes");

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
