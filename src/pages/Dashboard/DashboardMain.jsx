import { SpikeCard } from "../../components/card/card";
import { RadixIconsRocket } from "../../components/icons";
import avatar1 from "../../assets/avatars/avatar-01.svg";
import avatar2 from "../../assets/avatars/avatar-02.svg";

export default function DashboardMain() {
  const categories = [
    { id: 1, name: "All", icon: RadixIconsRocket },
    { id: 2, name: "IT & Software", icon: RadixIconsRocket },
    { id: 3, name: "Media Training", icon: RadixIconsRocket },
    { id: 4, name: "Business", icon: RadixIconsRocket },
    { id: 5, name: "Interior", icon: RadixIconsRocket },
  ];

  const popularEvents = [
    {
      category: "IT & Software",
      title: "CCNA 2020 200-125 Video Boot Camp",
      students: 9520,
      priority: 4.8,
      avatars: [avatar1, avatar2],
    },
    {
      category: "Business",
      title: "Powerful Business Writing: How to Write Concisely",
      students: 1463,
      priority: 4.9,
      avatars: [avatar1, avatar2],
    },
    {
      category: "Media Training",
      title: "Certified Six Sigma Yellow Belt Training",
      students: 6726,
      priority: 4.9,
      avatars: [avatar1, avatar2],
    },
    {
      category: "Interior",
      title: "How to Design a Room in 10 Easy Steps",
      students: 8735,
      priority: 5.0,
      avatars: [avatar1],
      isTopPriority: true,
    },
  ];

  return (
    <div className="flex-1 p-6 scrollable">
      <div>
        <h1 className="text-6xl font-bold mb-4">Spike</h1>
        <h2 className="text-2xl font-bold mb-8">
          The AI-Powered spider platform
        </h2>
      </div>

      {/* 分类导航 */}
      <div className="flex gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] hover:bg-[#FFFFFF]"
          >
            <category.icon className="w-5 h-5" />
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* 热门事件 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Most popular</h2>
        <div className="grid grid-cols-2 gap-4">
          {popularEvents.map((course, index) => (
            <SpikeCard
              key={index}
              icon={<RadixIconsRocket className="w-5 h-5" />}
              category={course.category}
              title={course.title}
              developers={course.students}
              priority={course.priority}
              avatars={course.avatars}
              isTopPriority={course.isTopPriority}
              className="w-full"
            />
          ))}
        </div>
      </div>
      {/* 最近事件 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Recently</h2>
        <div className="grid grid-cols-2 gap-4">
          {popularEvents.map((course, index) => (
            <SpikeCard
              key={index}
              icon={<RadixIconsRocket className="w-5 h-5" />}
              category={course.category}
              title={course.title}
              developers={course.students}
              priority={course.priority}
              avatars={course.avatars}
              isTopPriority={course.isTopPriority}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
