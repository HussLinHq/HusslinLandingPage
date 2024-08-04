   import FAQ from "../assets/FAQS.svg"
import FAQAccordion from './FAQAccordion'

function FiftSection() {
  return (
    <div className=' p-4 bg-[#F5F5F5]'>
        <div className='mb-[15px]'>
        <p className=' font-Euclid text-[20px] text-center font-bold text-[#007BFF] lg:text-[50px]'>Frequently Asked Questions</p>
        </div>
        <div className='lg:flex lg:gap-11'>
        <div className='bg-[#007BFF] rounded-2xl flex justify-center  p-4 lg:ml-[112px]'>
           <img src={FAQ} width={105} height={80} alt='' className='lg:w-[375px] lg:h-[284px]'/>
        </div>

        <div className=' mt-6'>
            <FAQAccordion/>
        </div>
        </div>
    </div>
  )
}

export default FiftSection