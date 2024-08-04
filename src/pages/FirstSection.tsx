  import AppstoreIMG from '../assets/appstorenew.png'
import PlaystoreImg  from '../assets/googlestorenew.png'
 
function FirstSection() {
  return (
    <div className='first-sectionBg'>
    <div className="first-section mt-[10px] ">
    <div className="heading">
        Get Things <span className='font-bold text-[#007BFF]'>Done</span> Without The Hassle
    </div>
    <div className="description p-[21px]">
        Your One-Stop Platform For Seamless Interations With Artisans And Professionals From All Walks Of Life.
    </div>
    <div className='icons flex gap-[11px] mt-[21px] mb-[26px] justify-center lg:mb-36'>
    <img src={PlaystoreImg} width={145} height={42} alt="Logo" />
    <img src={AppstoreIMG} width={145} height={42} alt="Logo" />

    </div>
    </div>
    </div>
)
}

export default FirstSection