import HandHolding from "../assets/handholding.svg"

function SixthSection() {
  return (
    <div className=''>
    <div className=' grid grid-cols-2 justify-center bg-[#E1F0FF]'>
    <div className=' col-span-1 content-center lg:ml-[102px] p-4'>
        <div className='font-Euclid text-[#007BFF] capitalize text-[10px] font-bold lg:text-[40px]'>
            <p className=''>Join the husslin Community</p>
        </div>
        <div className='text-[7px] font-Euclid  font-light leading-[11px] text-[#000] lg:text-[25px]'>
        <p className='lg:leading-[37px] '>Whether you&apos;re fixing, creating, or just chilling, we&apos;re here for it. 
            Join the <span className="font-bold">Husslin crew</span> today, where getting things done is as simple as 
            sending a text. Let&apos;s hustle! 🚀✨</p>
        </div>
        <div className='lg:mt-[34px] font-Euclid text-[4.5px] font-semibold rounded-full border-[0.3px] max-w-[70%] border-[#000] text-center mt-2 lg:text-[25px] lg:p-6 p-2'>
            <p className='font-semibold'>Join Our Community</p>
        </div>
    </div>
    <div className=' col-span-1'>
        <img src={HandHolding} width={181.982} height={109.417} alt="" className=' lg:w-[843.456px] lg:h-[507.128px]'/>
    </div>
    </div>
    </div>
  )
}

export default SixthSection