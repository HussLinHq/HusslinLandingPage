 import Price from '../assets/best-price.svg'
import Value from '../assets/value2.svg'
import Hands from '../assets/hands.svg'
 import HandyMan from '../assets/handyMan.svg'

function SecondSection() {
    const values = [
        {
            icon: Hands,
            title: 'Best Prices',
            body: 'The Application Is Designed In Such A Way That A Four Year Old Can Easily Navigate Through It.',
            titleStyle: 'font-bold text-[18px] mt-2 lg:text-[30px] ',
            bodyStyle: 'mt-2 text-[14px] font-Euclid font-[20px] lg:text-[25px]',
            containerStyle: 'p-[24px] bg-[#E1F0FF] rounded-xl shadow-md'
        },
        {
            icon: Price,
            title: 'Easy To Use',
            body: 'Each Errand Posted Is Worth Every Bit Of Its Value, Both Suitable To The Errandee And Errander.',
            titleStyle: 'font-bold text-[18px] mt-2 lg:text-[30px] ',
            bodyStyle: 'mt-2 text-[14px] font-Euclid font-[20px] lg:text-[25px]',
            containerStyle: 'p-[24px] rounded-xl shadow-md'

        },
        {
            icon: Value,
            title: 'Timely Delivery',
            body: 'Instantaneous Errand Running Is Guaranteed For The Errander',
            titleStyle: 'font-bold text-[18px] mt-2 lg:text-[30px]',
            bodyStyle: 'mt-2 text-[14px] font-Euclid font-[20px] lg:text-[25px]',
            containerStyle: 'p-[24px] bg-[#BDEFC9] rounded-xl shadow-md'
 
        }
    ];
    return (
        <div className="p-6 bg-[#F1F1F1] lg:p-[85.4px]">
            <div className="revolution text-[20px] mb-4 font-bold">
                We&apos;ve Revolutionalized The Way<br />You Connect With<span className="text-[#007BFF]"> Artisans</span> And<br /><span className="text-[#007BFF]">Professionals</span>
            </div>
            <div className='lg:flex lg:gap-8'>
            <div className='hidden md:block lg:mt-[34px]'>
                    <img src={HandyMan} alt='HandyMan' width={739} height={1041} className='rounded-2xl'/>
                </div>
            <div className="grid grid-rows-1 md:grid-rows-3 gap-[18px] font-Euclid">
             
                {values.map((item, index) => (
                      <div key={index} className={item.containerStyle}>
                        <div className="flex mb-4">
                            <img src={item.icon} width={17} height={17} alt={item.title} className='lg:w-[35px] lg:h-[35px]' />
                        </div>
                        <div className={item.titleStyle}>{item.title}</div>
                        <div className={item.bodyStyle}>{item.body}</div>
                  </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default SecondSection;
