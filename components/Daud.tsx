import Image from "next/image"
import 'boxicons/css/boxicons.min.css';


const Daud = () => {

  return (
    <section className=" bg-hero-bg-2">
      <div className="custom:flex-col custom:gap-8 custom-2:px-4 custom-2:pt-24 max-md:flex-col max-w-[1440px] mx-auto flex pt-48 lg:pl-20 pl-12   lg:pr-8 xl:pl-28 md:pr-0 custom:pr-12 items-start gap-4">
    <div className=" flex gap-6 flex-col flex-1">
      <h1 className="custom:text-5xl pt-8 text-white xl:text-35 md:text-22 lg:text-30 font-900">Learn the art of <br /> Game Dev</h1>
      <p className="text-white text-base leading-8 font-normal">This is a comprehensive course on Game Development. You will learn everything from generating an idea to publishing your games to different platforms.</p>
      <button className="bg-orange outline-none rounded-3xl py-4 border-0 text-xl font-bold text-white w-40">Enroll Now</button>
    </div>
    <div className="flex-[1.5] flex justify-end">
    <div className="lg:pt-28 pt-24 xl:pt-36 w-[54%] gap-28 lg:gap-36 xl:gap-36 flex flex-col">
      <div className="bg-white lg:w-40 w-[9.5rem] py-2 lg:py-4 xl:w-48 ml-auto xl:py-6 flex items-center flex-col rounded-3xl custom:mx-auto">
        <p className="font-bold text-3xl">32k</p>
        <p>Students Enrolled</p>
      </div>
      <div className="mx-auto bg-white w-[9.5rem] py-3 lg:w-40 lg:py-4 xl:w-44 flex items-center flex-col xl:py-6 rounded-3xl">
        <div className="flex items-start">
        <p className="font-bold text-3xl">4.7</p>
        <Image src="/star.svg" width={30} height={30} alt="star" />
        </div>
        <p>Overall Ratings</p>
      </div>
      </div>
      <div className="relative w-full">
      <Image className="marzi"  src="/hero-image 1.svg" alt="heo" layout="intrinsic" width={494} height={647} />
      </div>
    </div>
    </div>
   </section>
  )
}

export default Daud
