"use client";

import { useState } from "react";
import CollectionItem from "./Sections/CollectionItem";
import MyLibraryItem from "./Sections/MyLibraryItem";
import Section from "./Sections/Section";
import { useDataFetching } from "@/utils/hooks";

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

  useDataFetching(setCollections, "collections");
  useDataFetching(setLibrary, "library");

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-4 hidden lg:block">
      <Section title="Collections">
        {collections.map((collection) => (
          <CollectionItem key={collection.id} title={collection.name} />
        ))}
      </Section>
      <Section title="My Library">
        {library.map((item) => (
          <MyLibraryItem key={item.id} title={item.name} />
        ))}
      </Section>
    </div>
  );
}
