import SeventhSection from "./SeventhSection"
import SixthSection from "./SixthSection"

 
function Blog() {
  return (
    <div className="lg:mt-[61px]">

       <div className='p-8  mb-4  bg-[#F0F0F0] '>
            <p className='text-[20px] font-bold leading-[18px] font-Euclid text-[#007BFF] lg:text-[70px] lg:my-[78px]'>Our Blog</p>
        </div>

        <div className="lg:p-[102px]">

        <div>
        <div className="flex min-h-screen  ">
      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Navigation Tabs */}
        <div className="mb-6">
          <ul className="flex space-x-4 text-[6px] lg:text-[40px]">
            <li><a href="#" className="text-blue-600 font-semibold">All</a></li>
            <li><a href="#" className="text-gray-600">News</a></li>
            <li><a href="#" className="text-gray-600">Money</a></li>
            <li><a href="#" className="text-gray-600">Product</a></li>
            <li><a href="#" className="text-gray-600">Industry</a></li>
          </ul>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6).fill().map((_, index) => (
            <div key={index}  >
              <div className="h-[61px] w-[98px] bg-gray-300 mb-4 rounded lg:min-w-[259px] lg:min-h-[162px] lg:rounded-xl" ></div>
              <h3 className=" font-bold text-gray-500 mb-2 text-[6px] leading-[7px] lg:text-[12px]">PRODUCT</h3>
              <h2 className=" font-bold text-blue-600 mb-4 text-[8px] max-w-[98px] lg:text-[16px] lg:max-w-[232px]">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit</h2>
              {/* <p className="text-gray-500 text-[3.5px]">3 Min Read</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="min-w-[98px] lg:w-1/4 p-6 bg-[#F0F0F0] rounded-[5px]">
        <h2 className="text-[8px] font-bold mb-4 lg:text-[24px]">Trending News</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block p-4 bg-blue-100 rounded-lg hover:bg-blue-200">
              <h3 className="text-[4.5px] font-bold lg:text-[19px]">Recommended</h3>
              <p className="text-[5px] text-gray-600 lg:text-[19px]">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit</p>
            </a>
          </li>
          {Array(4).fill().map((_, index) => (
            <li key={index}>
              <a href="#" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <p className="text-[5px] text-gray-600 lg:text-[19px]">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
        </div>

      
    
    
    </div>

    <div className="p-6">
        <div className="max-w-xl mx-auto bg-green-100 p-8 rounded-lg shadow-md lg:max-w-[851px]">
      <h2 className="text-[19px] font-bold mb-4 lg:text-[40px]">Get Emails From Husslin About Product Updates, Industry News, And Events.</h2>
      <form className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto text-[7px] bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:text-[22px] lg:rounded-2xl lg:p-2"
        >
          Subscribe
        </button>
      </form>
    </div>
        </div>

        <div className="lg:p-[102px]">
        <SixthSection/>
    </div>
    <div>
        <SeventhSection/>
    </div>


    </div>
  )
}

export default Blog