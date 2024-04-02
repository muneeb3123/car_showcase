import { Daud, Hero, SearchBar} from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Daud />
      <div className="padding-x padding-y mt-12">
        <SearchBar />
      </div>
    </main>
  );
}
