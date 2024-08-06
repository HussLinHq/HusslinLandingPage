import Mission from '../assets/mission.svg'
import Vision from '../assets/vision.svg'
import ValuesModel from "./Values"
import SixthSection from "./SixthSection"
import SeventhSection from "./SeventhSection"

 
function Aboutus() {
const Values= [
    {numbers:'01',
    numberStyle:'hidden lg:block lg:text-[30px] font-bold lg:leading-[46px]',
    topic:"Indoor Errand",
    body:"Husslin Indoor Errand services include tasks like cleaning, organizing, laundry, and other household chores to help maintain your home effortlessly.", 
    topicstyle:"text-[18px] font-Euclid font-bold capitalize lg:text-[30px] lg:leading-[45px] ",
    bodystyle:"text-[14px] font-normal capitalize lg:text-[20px] lg:leading-[35px] lg:font-light ",
    containerstyle:"rounded-[13px] bg-[#9BDF83] p-[20px]"
},
    {numbers:'02',topic:"Outdoor Errand",
    numberStyle:'hidden lg:block lg:text-[30px] font-bold leading-[46px] lg:text-[30px] font-bold lg:leading-[46px]',
    body:"Husslin Outdoor Errand services cover activities such as grocery shopping, picking up prescriptions, mailing packages, and other outside errands.", 
    topicstyle:"text-[18px] font-Euclid font-bold capitalize lg:text-[30px] font-bold lg:leading-[46px]",
    bodystyle:"text-[14px] font-normal capitalize lg:text-[20px] lg:leading-[35px] lg:font-light ",
    containerstyle:"rounded-[13px] bg-[#E3E3E3] p-[20px]"

},
    {numbers:'03',topic:"Artisan Errand",
    numberStyle:'hidden lg:block lg:text-[30px] font-bold leading-[46px]',
    body:"Husslin Artisan Errand services connect you with skilled professionals for home repairs, renovations, plumbing, electrical work, and other specialized tasks.", 
    topicstyle:"text-[18px] font-Euclid font-bold capitalize lg:text-[30px] font-bold lg:leading-[46px]",
    bodystyle:"text-[14px] font-normal capitalize lg:text-[20px] lg:leading-[35px] lg:font-light ",
    containerstyle:"rounded-[13px] bg-[#E1F0FF] p-[20px]"

}

]

const MissionVision=[
    { images:Vision, heading:'Our Mission', bodies:'To revolutionize access to Artisans and errand runners, ensuring quick, reliable and efficient service delivery within minutes.', titlestyle:'text-[14px] text-[#007BFF] font-bold font-[Euclid] lg:text-[45px] lg:leading-[34px] lg:mt-[37px]', bodystyle:'text-[10px] font-Euclid font-normal font-[300px] lg:text-[25px] lg:leading-[35px] lg:mt-[28px]', containerStyles:"p-[20px] bg-[#E1F0FF] shadow-md lg:p-10"},
    { images:Mission, heading:'Our Vision', bodies:'To be the leading on-demand platform connecting people with skilled artisans and errand runners globally, enhancing convenience and creating Job opportunities.', titlestyle:'text-[14px] text-[#28A745] font-bold font-[Euclid] lg:text-[45px] lg:leading-[34px] lg:mt-[37px]', bodystyle:'text-[10px] font-Euclid font-normal font-[300px] lg:text-[25px] lg:leading-[35px] lg:mt-[28px]', containerStyles:"p-[20px] bg-[#FFFFFF] shadow-md lg:p-10"}

]


  return (
  <>
    <div className='first-sectionBg  lg:text-center'>
    <div className="first-section mt-[10px] ">
    <div className="text-[#007BFF] text-[30px] capitalize font-bold font-Euclid text-4xl leading-[32px] lg:text-[70px] lg:leading-[85px]">
        bringing the services you need right to your doorstep.
    </div>
    <div className=" p-4 text-[18px] font-Euclid lg:text-[30px] lg:leading-normal font-normal capitalize">
        Your One-Stop Platform For Seamless Interactions With Artisans And Professionals From All Walks Of Life.
    </div>
    </div>
    </div>
     <div className="lg:grid lg:grid-cols-2 font-Euclid lg:py-70px py-[37px] lg:px-0">
        <div className="col-span-1 mb-4 px-[24px] bg-[#F8F8F8] ">
            <p className="lg:text-[25px] text-[#28A745] font-bold capitalize pt-4 pb-[10px]">OUR STORY</p>
            <p className="lg:text-[60px] text-[25px] font-semibold leading-[30px] lg:leading-[66px] font-Euclid">HussLin is Connecting You with <span className="text-[#28A745] font-bold">Reliable Artisans </span>and <span className="text-[#007BFF] font-bold">Errand Runners.</span></p>
            <p className="text-[14px] capitalize pt-4 leading-[26px] lg:text-[22px] lg:leading-[40px] lg:font-light">Husslin is creating jobs by connecting people who need help with people who can help.
                We believe that everyone has something to offer,
                and that everyone can use a little help sometimes.</p>
        </div>
        <div className="col-span-1 px-[24px]  lg:bg-[#F8F8F8] lg:py-4 ">
            {
                Values.map((items,index)=>(
                    <div key={index}  className="leading-[23px] p-2" >
                    <div className={items.containerstyle}>
                           <p className={items.topicstyle}>{items.numbers} {items.topic}</p>
                         <p className={items.bodystyle}>{items.body}</p>
                    </div>
                    </div>
                ))
            }

        </div>
    </div>
        <div className="flex p-6 px-[24px] mb-6">
        {
                MissionVision.map((content,index)=>(
                    <div key={index} className=" ">
                        <div>
                        <div className={content.containerStyles}>
                         <div className="">
                              <img src={content.images} width={19.894} height={19.894} alt="mission" className=' lg:w-[53px] lg:h-[53px]'/>
                         </div>
                        <p className={content.titlestyle}>{content.heading}</p>
                        <p className={content.bodystyle}>{content.bodies}</p>
                        </div>
                        </div>
                    </div>
                 ))
            }
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
  )
}

export default Aboutus