
import ValuesModel from "./Values"
import SixthSection from "./SixthSection"
import SeventhSection from "./SeventhSection"
import FAQAccordion from "./FAQAccordion"
function FAQ() {
  return (
    <div className="text-center">
     <div className='first-sectionBg  lg:text-center'>
    <div className="first-section mt-[10px] ">
    <div className="text-[#007BFF] text-[20px] capitalize font-bold font-Euclid leading-[18px] lg:text-[70px] lg:leading-[85px]">
    Frequently Asked Questions
    </div>
    <div className="p-2 text-[10px] font-Euclid lg:text-[30px] lg:leading-normal font-normal capitalize">
    Need any Answer? Enter your question for quick response
    </div>
    </div>
    </div>
   <div className="p-8">
    <FAQAccordion/>
   </div>
       <div className="bg-[#007BFF] p-2 m-6 rounded-md lg:mb-[174px] lg:mt-[131px]">
        <p className="text-[11.5px] font-light text-[#FFF] lg:text-[40px] lg:leading-[113px] lg:font-medium">Not Satisfied? Send a mail to support@husslin.com</p>
       </div>
    <div className="p-4">
        <SixthSection/>
    </div>
    <div>
        <SeventhSection/>
    </div>
     </div>
  )
}

export default FAQ