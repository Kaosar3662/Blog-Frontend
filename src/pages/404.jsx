import { Link } from 'react-router-dom';
import Button from '../components/primary-btn';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--Neutral-White-300)]">
      <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-[var(--Neutral-White-200)] border-[var(--Neutral-White-300)] text-[var(--Neutral-Black-900)]">
        <img
          src="/Subtract.png"
          alt="logo"
          className="w-12 md:w-24 mb-6"
        />
        <h3 className="text-lg md:text-xl font-semibold mb-4 max-w-[500px]">
          The page you are looking doesn’t exist.
        </h3>
        <Link to="/">
          <Button btnTitle="Go to Home" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
