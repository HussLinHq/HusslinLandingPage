import Iconvalue from '../assets/iconvalue.svg'
import Iconvalue2 from '../assets/iconvalue1.svg'
import Iconvalue3 from '../assets/iconvalue3.svg'
import Iconvalue1 from '../assets/iconvalue4.svg'


function ValuesModel() {
    
const OurValues=[
    {images:Iconvalue1,  heading:"Reliability", body:"Consistently dependable services", headstyle:"text-[10px] font-Euclid font-bold lg:text-[30px] font-semibold", bodystyle:" text-[8px] capitalize font-Euclid leading-[13px] lg:text-[21px] lg:leading-normal lg:text-center", containerstyle:"bg-[#E8FFED] rounded-[8px] p-3 text-center", imagestyle:"justify-center flex"},
    {images:Iconvalue3,  heading:"Efficiency", body:"Quick response and timely delivery", headstyle:"text-[10px] font-Euclid font-bold lg:text-[30px] font-semibold", bodystyle:" text-[8px]  capitalize font-Euclid leading-[13px] lg:text-[21px] lg:leading-normal lg:text-center", containerstyle:"bg-[#E8FFED] rounded-[8px] p-2 text-center",imagestyle:"justify-center flex"},
    {images:Iconvalue2,  heading:"Community", body:"Empowering artisans and creating jobs",headstyle:"text-[10px] font-Euclid font-bold lg:text-[30px] font-semibold", bodystyle:" text-[8px] capitalize font-Euclid leading-[13px]  lg:text-[21px] lg:leading-normal lg:text-center", containerstyle:"bg-[#E8FFED] rounded-[8px] p-2 text-center",imagestyle:"justify-center flex"},
    {images:Iconvalue,  heading:"Innovation", body:"Leveraging technology for seamless service",headstyle:"text-[10px] font-Euclid font-bold lg:text-[30px] font-semibold", bodystyle:" text-[8px] capitalize font-Euclid  leading-[13px]  lg:text-[21px] lg:leading-normal lg:text-center", containerstyle:"bg-[#E8FFED] rounded-[8px] p-2 text-center",imagestyle:"justify-center flex"}
]
  return (
    <div className='lg:bg-[#F2FFF5]'>
          <div className="px-[23px] ">
            <div className="text-center mb-[11px]">
                <p className="text-[20px] text-[#007BFF] font-bold capitalize font-Euclid lg:text-[60px]">Our Values</p>
            </div>
            <div className="flex gap-4 pb-6">
                {
                    OurValues.map((values, index)=>(
                        <div key={index} className={values.containerstyle}>
                            <div >
                                <div className={values.imagestyle}>
                                <img src={values.images} alt="iconValues" width={14.597} height={17.516} className="mb-[10px] mt-[12px] lg:w-[54px] lg:h-[64px]"/>
                                </div>
                                <p className={values.headstyle}>{values.heading}</p>
                                <p className={values.bodystyle}>{values.body}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ValuesModel