
const Stats = () => {
  return (
 <div className="max-w-[85%] mx-auto px-4 relative z-10">
            <div className="bg-[#0F082B] rounded-2xl px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 transform -translate-y-2 md:-translate-y-4 lg:-translate-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-white text-center">
                <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">
                    3
                  </div>
                  <div className="text-xs md:text-sm lg:text-base opacity-90">FPSO'S</div>
                </div>
                <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">
                    1
                  </div>
                  <div className="text-xs md:text-sm lg:text-base opacity-90">FSO</div>
                </div>
                <div className="lg:border-r lg:border-gray-600 pb-4 lg:pb-0">
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">
                    30%
                  </div>
                  <div className="text-xs md:text-sm lg:text-base opacity-90 px-2">
                    Average cost savings for clients
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-1 md:mb-2">
                    25%
                  </div>
                  <div className="text-xs md:text-sm lg:text-base opacity-90">
                    CAGR Projected growth
                  </div>
                </div>
              </div>
            </div>
          </div>  )
}

export default Stats
