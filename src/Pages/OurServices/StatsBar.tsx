const stats = [
  { value: '3', label: "FPSO'S" },
  { value: '1', label: 'FSO' },
  { value: '30%', label: 'Average cost savings for clients' },
  { value: '25%', label: 'CAGR Projected growth' },
];

const StatsBar = () => (
  <div className="w-full flex justify-center py-8 sm:py-8 mb-8 ">
    <div className="bg-[#0F082B] rounded-2xl w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-12 sm:py-14 gap-6 sm:gap-0 mx-4">
      {stats.map((stat, idx) => (
        <div key={stat.label} className="flex-1 flex flex-col items-center relative">
          <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            {stat.value}
          </span>
          <span className="text-white text-xs  font-medium text-center">
            {stat.label}
          </span>
          {/* Divider for desktop */}
          {idx < stats.length - 1 && (
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-12 sm:h-16 border-r border-[#2C2352]"></div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default StatsBar;
