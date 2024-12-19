import { useState } from "react";
import SuperSearch from "./SuperSearch";
import SearchResult from "./SearchResult";

export default function HomeContent() {
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = () => {
    setIsSearched(true);
  };

  return (
    <div className="home-content min-h-screen relative">
      <SuperSearch isSearched={isSearched} onSearch={handleSearch} />
      <SearchResult isSearched={isSearched} />
    </div>
  );
}
