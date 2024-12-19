import ErrorLayout from "../components/ErrorLayout";

export default function NotFoundContent() {
  return (
    <ErrorLayout 
      code="404"
      title="Page Not Found"
      message="The page you're looking for doesn't exist."
    />
  );
} 