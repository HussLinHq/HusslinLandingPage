
import ValuesModel from "./Values"
import SixthSection from "./SixthSection"
import SeventhSection from "./SeventhSection"
import FAQAccordion from "./FAQAccordion"
function FAQ() {
  return (
    <div>
         <>
    <div className='first-sectionBg  lg:text-center'>
    <div className="first-section mt-[10px] ">
    <div className="text-[#007BFF] text-[20px] capitalize font-bold font-Euclid text-4xl leading-[32px] lg:text-[70px] lg:leading-[85px]">
    Frequently Asked Questions
    </div>
    <div className=" p-4 text-[10px] font-Euclid lg:text-[30px] lg:leading-normal font-normal capitalize">
    Need any Answer? Enter your question for quick response
    </div>
    </div>
    </div>
   <div>
    <FAQAccordion/>
   </div>
       
    <div>
        <ValuesModel/>
      </div>
    <div className="p-4">
        <SixthSection/>
    </div>
    <div>
        <SeventhSection/>
    </div>
    </>
    </div>
  )
}

export default FAQ