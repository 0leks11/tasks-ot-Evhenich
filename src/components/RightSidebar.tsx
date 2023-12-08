import CollectionItem from "./Sections/CollectionItem";
import CollectionsSection from "./Sections/CollectionsSection";
import MyLibraryItem from "./Sections/MyLibraryItem";
import MyLibrarySection from "./Sections/MyLibrarySection";
import Section from "./Sections/Section";

const myLibraryItems = [
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
  { id: 16, title: "A couple of words" },
  { id: 17, title: "Another example" },
  { id: 18, title: "Lorem Ipsum" },
  { id: 19, title: "Random Text" },
  { id: 20, title: "Placeholder Data" },
];

const collections = [
  { id: 1, title: "A collection" },
  { id: 2, title: "Another collection" },
  { id: 3, title: "Sample Collection" },
  { id: 4, title: "Collection 1" },
  { id: 5, title: "Collection 2" },
  { id: 6, title: "Collection XYZ" },
  { id: 7, title: "My Favorite Collection" },
  { id: 8, title: "Test Collection" },
  { id: 9, title: "Demo Collection" },
  { id: 10, title: "Placeholder Collection" },
  { id: 11, title: "Collection of Things" },
  { id: 12, title: "Collection ABC" },
  { id: 13, title: "Collection XYZ" },
  { id: 14, title: "Collection 123" },
];

export default function RightSidebar() {
  return (
    <div className="bg-green-500 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-4 hidden lg:block">
      <Section title="Collections">
        {collections.map((collection) => (
          <CollectionItem
            key={collection.id}
            title={collection.title}
            isActive={collection.id === 1}
          />
        ))}
      </Section>
      <Section title="My Library">
        {myLibraryItems.map((item) => (
          <MyLibraryItem
            key={item.id}
            title={item.title}
            isActive={item.id === 1}
          />
        ))}
      </Section>
    </div>
  );
}
