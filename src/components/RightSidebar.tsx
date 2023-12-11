"use client";

import { useEffect, useState } from "react";
import CollectionItem from "./Sections/CollectionItem";
import MyLibraryItem from "./Sections/MyLibraryItem";
import Section from "./Sections/Section";

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

  useEffect(() => {
    const fetchCollections = async () => {
      const res = await fetch("api/collections", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setCollections(data.data.content);
      } else {
        console.log("Error with fetchCollections");
      }
    };

    const fetchLibrary = async () => {
      const res = await fetch("api/library", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setLibrary(data.data.content);
      } else {
        console.log("Error with fetchLibrary");
      }
    };

    fetchCollections();
    fetchLibrary();
  }, []);
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-4 hidden lg:block">
      <Section title="Collections">
        {collections.map((collection) => (
          <CollectionItem key={collection.id} title={collection.title} />
        ))}
      </Section>
      <Section title="My Library">
        {library.map((item) => (
          <MyLibraryItem key={item.id} title={item.title} />
        ))}
      </Section>
    </div>
  );
}
