export default function ServiceUnavailableContent() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">503</h1>
        <p className="text-2xl mt-4">Service Unavailable</p>
        <p className="text-gray-500 mt-2">The server is temporarily unable to handle your request.</p>
      </div>
    </div>
  );
} 