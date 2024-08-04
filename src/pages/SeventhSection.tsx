  import Iphone from "../assets/iphone12.svg"
import AppStore from '../assets/iphstore.svg'
import GoogleStore from '../assets/Googlestr.svg'

function SeventhSection() {
  return (
    <div className='p-4 lg:p-[87.73px]'>
        <div className='p-4 bg-[#28A745] rounded-2xl flex lg:p-[75.47px] '>
            <div className=''>
            <p className='capitalize font-Euclid text-[25px] font-bold text-[#FEFEFE] lg:text-[75px]'>Ready to hustle? <br/> Lets do this! </p>
            <div className='flex gap-2'>
            <img src={AppStore} width={55} height={16} alt="iphone Model" className='lg:w-[179px] lg:h-[52px]'/>
            <img src={GoogleStore} width={55} height={16} alt="iphone Model" className='lg:w-[179px] lg:h-[52px]'/>
            </div>
            </div>
            <div className=''>
            <img src={Iphone} width={174} height={131} alt="iphone Model" className='lg:w-[677px] lg:h-[508px]'/>
            </div>
        </div>
    </div>
  )
}

export default SeventhSection