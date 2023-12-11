"use client";

import { useState } from "react";
import CollectionItem from "./Sections/CollectionItem";
import MyLibraryItem from "./Sections/MyLibraryItem";
import Section from "./Sections/Section";
import { useDataFetching } from "@/utils/hooks";
import { renderSectionContent } from "@/utils/helpers";

type LibraryItem = {
  id: string;
  name: string;
};

type Collection = {
  id: string;
  name: string;
};

export default function RightSidebar() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [library, setLibrary] = useState<LibraryItem[]>([]);

  const { loading: collectionsLoading } = useDataFetching(
    setCollections,
    "collections"
  );
  const { loading: libraryLoading } = useDataFetching(setLibrary, "library");

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-4 hidden lg:block">
      <Section title="Collections">
        {renderSectionContent(collectionsLoading, collections, CollectionItem)}
      </Section>
      <Section title="My Library">
        {renderSectionContent(libraryLoading, library, MyLibraryItem)}
      </Section>
    </div>
  );
}
