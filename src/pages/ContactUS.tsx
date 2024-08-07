
 import SeventhSection from "./SeventhSection"
 
function ContactUS() {
  return (
    <div className=''>
        <div className='text-center p-8 mb-[-60px] lg:mt-[86px]'> 
            <p className='text-[20px] font-bold leading-[18px] font-Euclid text-[#007BFF] lg:text-[70px] lg:mb-[87px] '>Contact Us</p>
        </div>
    <div className="flex justify-center items-center min-h-screen p-[26px] lg:mb-[65px]">
      <form className="rounded-lg shadow-lg w-full max-w-md lg:max-w-[1191px] bg-blue-50 p-8 lg:pl-[234px] lg:pr-[262px]">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 lg:text-[40px] lg:mt-[72px] lg:mb-[75px]">Leave Us A Message</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="col-span-1 p-2 border bg-[#E8FFED] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="col-span-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#E8FFED]"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded-lg bg-[#E8FFED] focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-2 border rounded-lg bg-[#E8FFED] focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Write Message Here"
            className="w-full p-2 border rounded-lg bg-[#E8FFED] focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 lg:mb-[67px]"
        >
          Submit
        </button>
      </form>
    </div>
    <div>
        <SeventhSection/>
    </div>
    </div>
  )
}

export default ContactUS