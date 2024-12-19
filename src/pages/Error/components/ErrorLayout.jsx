// 可复用的错误页面布局组件
export default function ErrorLayout({ code, title, message }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">{code}</h1>
        <p className="text-2xl mt-4">{title}</p>
        <p className="text-gray-500 mt-2">{message}</p>
      </div>
    </div>
  );
} 