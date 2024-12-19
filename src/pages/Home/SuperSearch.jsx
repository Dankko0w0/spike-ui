import { useState } from "react";
import { RiSparkling2Line, RadixIconsRocket } from "../../components/icons";

export default function SuperSearch({ isSearched, onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim()) {
      onSearch();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      onSearch();
    }
  };

  return (
    <div className={`${isSearched ? "slide-top" : ""} super-search`}>
      <div className="hero min-h-screen font-TeXGyreAdventorBold text-black">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h1 className="text-6xl tracking-in-expand">Spike</h1>
                <RiSparkling2Line className="w-8 h-8 blink-1" />
              </div>
              <h2 className="text-2xl typing-effect">
                The AI-Powered spider platform
              </h2>
            </div>
            <div className="join">
              <input
                className="input input-bordered join-item rounded-l-full bg-[#FFFFFF] border-black"
                placeholder="🔍"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="btn join-item rounded-r-full bg-[#FFFFFF] border-black"
                onClick={handleSearch}
              >
                <p className="text-black">Run</p>
                <RadixIconsRocket className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
