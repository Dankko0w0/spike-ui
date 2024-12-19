import PropTypes from "prop-types";

// 预定义的颜色选项
const DEFAULT_COLORS = {
  pink: "bg-[#F3C5C5]",
  orange: "bg-[#FAE0C1]",
  purple: "bg-[#D5D2FE]",
  green: "bg-[#BFF0DB]",
};

// 添加渐变色版本
const GRADIENT_COLORS = {
  pink: "bg-gradient-to-br from-[#F3C5C5] to-[#F3C5C5]/50",
  orange: "bg-gradient-to-br from-[#FAE0C1] to-[#FAE0C1]/50",
  purple: "bg-gradient-to-br from-[#D5D2FE] to-[#D5D2FE]/50",
  green: "bg-gradient-to-br from-[#BFF0DB] to-[#BFF0DB]/50",
};

export function SpikeCard({
  icon,
  category,
  title,
  developers,
  priority,
  avatars,
  isTopPriority = false,
  className = "",
  bgColor = "",
  gradient = true,
}) {
  // 根据 gradient 参数选择颜色集合
  const colorSet = gradient ? GRADIENT_COLORS : DEFAULT_COLORS;
  
  // 如果没有提供颜色，随机选择一个默认颜色
  const bgColorClass = bgColor
    ? gradient 
      ? `bg-gradient-to-br from-[${bgColor}] to-[${bgColor}]/70`
      : `bg-[${bgColor}]`
    : Object.values(colorSet)[
        Math.floor(Math.random() * Object.values(colorSet).length)
      ];

  return (
    <div
      className={`card hover:shadow-lg transition-shadow duration-300 text-black ${bgColorClass} ${className}`}
    >
      <div className="card-body p-6">
        {/* 顶部区域：类别和优先级 */}
        <div className="flex justify-between items-center mb-4">
          {/* 左侧：类别图标和名称 */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFFFF]">
              <div className="w-5 h-5">{icon}</div>
            </div>
            <span className="text-sm">{category}</span>
          </div>

          {/* 右侧：优先级和最高优先级标签 */}
          <div className="flex items-center gap-2">
            <div className="flex items-center px-2.5 py-1 rounded-full bg-[#FFFFFF]">
              <svg
                className="w-3.5 h-3.5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-0.5 text-sm font-medium">{priority}</span>
            </div>
            {isTopPriority && (
              <span className="px-2 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full">
                Top 10
              </span>
            )}
          </div>
        </div>

        {/* 标题 */}
        <h2 className="card-title text-lg font-bold mb-2">{title}</h2>

        {/* 底部区域：开发者数量和头像 */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm">
            {developers.toLocaleString()} developers
          </span>

          {/* 开发者头像组 */}
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                className="w-6 h-6 rounded-full border-2 border-white bg-[#FFFFFF]"
                src={avatar}
                alt={`Developer ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

SpikeCard.propTypes = {
  icon: PropTypes.element.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  developers: PropTypes.number.isRequired,
  priority: PropTypes.number.isRequired,
  avatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  isTopPriority: PropTypes.bool,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  gradient: PropTypes.bool, // 新增 gradient 的 PropType
};
