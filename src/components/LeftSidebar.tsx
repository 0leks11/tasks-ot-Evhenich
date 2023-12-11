"use client";

import { useDataFetching } from "@/utils/hooks";
import ConversationItem from "./Sections/ConversationItem";
import NotesItem from "./Sections/NotesItem";
import Section from "./Sections/Section";
import { useState } from "react";
import { renderSectionContent } from "@/utils/helpers";

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

  const { loading: convLoading } = useDataFetching(
    setConversations,
    "conversations"
  );
  const { loading: notesLoading } = useDataFetching(setNotes, "notes");

  return (
    <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-4 hidden md:block">
      <Section title="Conversations">
        {renderSectionContent(convLoading, conversations, ConversationItem)}
      </Section>
      <Section title="Notes">
        {renderSectionContent(notesLoading, notes, NotesItem)}
      </Section>
    </div>
  );
}
