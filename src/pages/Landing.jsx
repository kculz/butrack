import BGImg from '../assets/images/pexels.jpg'
import Logo from '../assets/images/logo.png'

const Landing = () => {
  return (
    <div className="bg-hero flex flex-col justify-between items-center ">
        <marquee behavior="" direction="left" className="absolute top-32">
            <img src={Logo} alt="" className=''/>
        </marquee>

        <div className="md:hidden  w-screen h-screen bg-white/70 backdrop-blur flex flex-col justify-center ">
       
        <img src={Logo} alt="" />
        <h1 className="text-center text-gray-700 text-4xl mt-14">
            coming soon
        </h1>

        </div>
    </div>
  )
}

export default Landing