import { Link } from 'react-router-dom';
import '../assets/var.css';
import Button from './primary-btn';


const nav = () => {


  return (
    <div className="w-full bg-[var(--Neutral-Black-900)] px-[24px] py-[18px] ">
      <div className="w-full:">
        <div className="w-full flex justify-between items-center">
          <Link to={'/'}>
            <img src="/Logo.png" alt="" />
          </Link>
          <div className="flex gap-[20px] text-[#fff]">
            <Link to={'/signup'}>
              <p>Sign Up</p>
            </Link>
            <Link to={'/login'}>
              <p>Login</p>
            </Link>
          </div>
          <Link to={'/contact'}>
            <Button btnTitle="Contact Us" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default nav;
