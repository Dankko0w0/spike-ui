export default function SearchResult({ isSearched }) {
  return (
    <div
      className={`${
        isSearched ? "" : "hidden"
      }`}
    >
        <div className="text-center">
            <h1 className="text-6xl">SearchResult</h1>
        </div>
    </div>
  );
}
