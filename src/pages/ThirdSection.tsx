 import ArrowIcon from '../assets/Arrow_Circle_RightNew.svg'
 import Iphone from '../assets/iphone14.svg'
import Underline from "../assets/underline.svg"

function SecondSection() {
    const values = [
        {
            icon:{
                text: 'Learn more',
                img: ArrowIcon,
                iconstyle:'text-[#007BFF] lg:text-[20px]'

            },
            title: 'The Boss Corner',
            body: 'Are You An Artisan Or A Professional? Display Your Skills And Expertise On Husslin',
            titleStyle: 'font-bold text-[20px] mb-[14px] font-[600px] text-[#007BFF] lg:text-[25px] font-bold',
            bodyStyle: 'text-[15px]  font-[300px] text-[#000]',
            containerStyle: 'p-[40px] rounded-xl shadow-md bg-[#F6F6F6]'
        },
        {
            icon:{
                text: 'Learn more',
                img: ArrowIcon,
                iconstyle:'text-[#007BFF] lg:text-[20px]'
            },
            title: 'Hustle On Husslin',
            body: 'Are You A Professional? Join Our Elite League Of Hustlers By Displaying Your Skills And Earn On Husslin',
            titleStyle: 'font-bold text-[20px] mb-[14px] font-[600px] text-[#007BFF] lg:text-[25px] font-bold ',
            bodyStyle: 'text-[15px]  font-[300px] text-[#000]',
            containerStyle: 'p-[40px] rounded-xl shadow-md bg-[#C2DFFF]'
        },
        {
            icon:{
                text: 'Learn more',
                img: ArrowIcon,
                iconstyle:'text-[#007BFF] lg:text-[20px]'

            },
            title: 'Artisans',
            body: 'Are You An Artisan? Its Your Time To Shine, Get Ready To Be Everyones Go-To-Person',
            titleStyle: 'font-bold text-[20px] mb-[14px] font-[600px]  text-[#007BFF] lg:text-[25px] font-bold ',
            bodyStyle: 'text-[15px]  font-[300px] text-[#000]',
            containerStyle: 'p-[40px] rounded-xl shadow-md  bg-[#BDEFC9]'
         }
    ];
    return ( 
        <div className="p-4 bg-[#E1F0FF] ">
            <div className='lg:flex mb-[108.65px] lg:ml-[123px]'>
            <div className="font-bold text-[20px] text-center lg:text-[50px]">
              <p> Bringing The <span className="text-[#007BFF]"> Services</span> You<br />Need <span className="text-[#007BFF]"> Right</span> To Your <span className="text-[#007BFF]"> Doorstep</span> </p>
            <img src={Underline} alt='' width={398.008} height={7.349} className=''/>
            </div> 

            <div className='flex justify-center mb-[17px] '>
            <img src={Iphone} width={311} height={107} alt='IphoneMockup' className=' lg:w-[949px] lg:h-[325px] lg:shrink-0' />
 
            </div>
            </div>

            <div className="grid grid-rows-1 md:grid-rows-3 gap-4 lg:flex lg:ml-[101px] lg:mr-[123px] mb-[85px]">
                {values.map((item, index) => (
                      <div key={index} className={item.containerStyle}>
                        <div className={item.titleStyle}>{item.title}</div>
                        <div className={item.bodyStyle}>{item.body}</div>
                        <div>
                        <div className="flex mt-[21px] gap-2">
                          <div className={item.icon.iconstyle}>{item.icon.text}</div>  
                            <img src={item.icon.img} width={15.414} height={14.947} alt={item.title}  className=' lg:w-[21.401px] lg:h-[20.753px]'/>
                        </div>
                        </div>
                  </div>
                ))}
            </div>
        </div>
    );
}

export default SecondSection;
