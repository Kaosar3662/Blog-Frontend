import { Link } from 'react-router-dom';
import SocialLink from './links/Sociallink';

const footer = () => {
  return (
    <footer className="w-full bg-(--Neutral-Black-900) px-[24px] pt-[100px] pb-[30px]">
      <div className='max-w-[1200px] mx-auto'>
        <div>
          <div className="flex justify-between">
            <h4 className="text-white">Follow Us: ----</h4>
            <div className='flex gap-2'>
              <SocialLink src="/fb.svg" link="facebook.com" />
              <SocialLink src="/ig.svg" link="instagram.com" />
              <SocialLink src="/ld.svg" link="linkedin.com" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
