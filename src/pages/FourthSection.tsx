import Phones from '../assets/2phones.svg'
 

function FourthSection() {

    const Process=[
        {Topic:"Download The App", Body:"Get started by downloading the app and creating a profile", headstyle:"font-Euclid text-[18px] font-bold capitalize text-[#007BFF] lg:text-[30px]" , bodyStyle:"font-Euclid text-[14px] font-[300px] capitalize lg:text-[30px]"},
        {Topic:"Make a Request", Body:"Got something that needs fixing? Throw up a request and watch the pros pick up your request", headstyle:"font-Euclid text-[18px] font-bold capitalize text-[#007BFF] lg:text-[30px]" , bodyStyle:"font-Euclid text-[14px] font-[300px] capitalize lg:text-[30px]"},
        {Topic:"Hire an artisan / professional", Body:"Got something that needs fixing? Throw up a request and watch the pros pick up your request", headstyle:"font-Euclid text-[18px] font-bold capitalize text-[#007BFF] lg:text-[30px]" , bodyStyle:"font-Euclid text-[14px] font-[300px] capitalize lg:text-[30px]"}
    ]

  return (
    <div className='p-6 font-Euclid mb-[14px] lg:flex lg:py=[93px]'>
        <div className='sm:block hidden'>
            <img src={Phones} alt='' width={1035.868} height={777.152}/>
        </div>
        <div className=''>
        <p className='lg:text-[50px] text-[24px] font-bold '>How To Use The App</p>

        <div>
            {
                Process.map((items,index)=>(
                    <div key={index} className='p-2'>
                        <p className={items.headstyle}>{items.Topic}</p>
                        <p className={items.bodyStyle}>{items.Body}</p>

                    </div>
                ))
            }

        </div>
        </div>

    </div>
  )
}

export default FourthSection