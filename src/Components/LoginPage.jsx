import Login from "../assets/celeb.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const handleContinue = () => {
    
    navigate("/Home");
  };
  return (
    <>
     <h2 className=' relative mt-20 text-6xl  text-blue-400 font- text-center custom-margin-right '>Unlock Exclusive Benefits</h2>
    <div className='w-full  flex justify-center items-center'>
    
      <div className='flex flex-col  md:flex-row px-10 w-full md:max-w-[1200px]'>
        <form className='max-w-[600px] w-full bg-white pt-4 md:mr-10'>
         
          <label >PHONE NUMBER</label>
          <div className='flex md:me-2'>
          <input className='border-2 border-black rounded-full relative  p-2 mr-4 w-1/2 ' placeholder="+91 India" type='number' />
          <input className='border-2 border-black rounded-full relative  p-2 w-1/2' placeholder="9645789210" type='text' />
          </div>
          <div className='flex flex-col mb-4 relative mt-2'>
            <label>NAME</label>
            <input className='border-2 border-black rounded-full relative  p-2 w-90' type='text' />
            
          </div>
          <div className='flex flex-col relative'>
            <label>EMAIL [OPTIONAL]</label>
            <input className='border-2 border-black rounded-full relative bg p-2 w-90' type='text' />
          </div>
          <button className='border-2 border-black rounded-full w-full py-2 mt-8 bg-blue-400 hover:bg-blue-500 text-white relative'onClick={handleContinue}>CONTINUE</button>
          <p className='text-center mt-4 relative'>Get ready to recieve a secret code (OTP) on your phone</p>
        </form>

        <img className=' w-[500px]  object-cover mix-blend-overlay mt-10 md:mt-0' src={Login} alt='Celebrity' />
      </div>
    </div>
    </>
  );
}

export default LoginPage;
