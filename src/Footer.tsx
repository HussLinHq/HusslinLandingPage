
  import Logo from "./assets/logoNew.svg"
import Twitter from "./assets/TwitterX.svg"
import Facebook from "./assets/Facebook.svg"
import Instagram from "./assets/Instagram.svg"
import Linkedin from "./assets/LinkedIn (1).svg"

function Footer() {
  return (
    <div className=''>
    <div className='p-6 grid grid-cols-3 font-Euclid bg-[#EBF4FF] lg:px-[103px] lg:pt-[145px] lg:pb-[82px]'>

      <div className='col-span-1'>
        <div>
        <img src={Logo} width={73} height={15} alt='Logo' className='lg:w-[165px] lg:h-[33px]'/>
        <p className=' capitalize text-[7px] font-light text-[#000] font-Euclid mt-2 lg:text-[18px] lg:font-light'>
        your one-stop platform for seamless interactions with artisans and professionals from<br/> all walks of life.
        </p>
        </div>
        <div className='mt-[15px] flex gap-[5px]'>
        <img className='bg-[#007BFF] rounded-lg p-[3px] lg:w-[23px] lg:h-[24px]' src={Twitter} width={11} height={10} alt='twitter'/>
        <img className='bg-[#007BFF] rounded-lg p-[3px]  lg:w-[23px] lg:h-[24px]' src={Facebook} width={11} height={10} alt='facebook'/>
        <img className='bg-[#007BFF] rounded-lg p-[3px]  lg:w-[23px] lg:h-[24px]' src={Instagram} width={11} height={10} alt='instagram'/>
        <img className='bg-[#007BFF] rounded-lg p-[3px]  lg:w-[23px] lg:h-[24px]' src={Linkedin} width={11} height={10} alt='linekdin'/>
        </div>
        <div className=' font-Euclid text-[6px] font-normal mt-[38px] flex gap-1 lg:text-[14px]'>
          <p>(c) 2024 Husslin.</p>
          <p>All rights reserved.</p>
        </div>
      </div>

      <div className='col-span-1 px-[43px] lg:flex lg:gap-[75px]'>
        <div>
        <p className='text-[8px] font-bold lg:text-[20px]' >Company</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>About us</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>Careers</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>FAQs</p>
        </div>
         <div className='mt-[19px] lg:mt-0'>
        <p className='text-[8px] font-bold lg:text-[20px]' >Legal</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>Privacy Policy</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>Terms and Conditions</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>Disclosure</p>
        </div>
      </div>
      <div  className='col-span-1 lg:flex lg:gap-[75px]'>
        <div>
        <p className='text-[8px] font-bold lg:text-[20px]' >Explore</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>Why Husslin</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>Our Blog</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>Help Center</p>
        </div>
        <div className='mt-[19px] lg:mt-0'>
        <p className='text-[8px] font-bold lg:text-[20px]' >Contact us</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>0813-687-8901</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>0813-687-8901</p>
        <p className='text-[7px] font-[400px] text-[#000] lg:text-[18px]'>support@husslin.com</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer