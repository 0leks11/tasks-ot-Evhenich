import ConversationSection from "./Sections/ConversationsSection";
import NotesSection from "./Sections/NotesSection";

export default function LeftSidebar() {
  return (
    <div className="bg-blue-500 w-full md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-1/7 p-4 hidden md:block">
      {/* <div></div> */}
      <ConversationSection />
      {/* <div></div> */}
      <NotesSection />
    </div>
  );
}
