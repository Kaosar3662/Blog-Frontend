import Button from '../components/primary-btn';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--Neutral-White-300)]">
      <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-[var(--Neutral-White-200)] border-[var(--Neutral-White-300)] text-[var(--Neutral-Black-900)] w-full max-w-md">
        <img src="/logo2.png" alt="logo" className="w-8 md:w-8 mb-4" />
        <h5 className="text-lg md:text-xl font-semibold mb-2">
          Welcome to the ClickNews
        </h5>
        <p className="text-sm mb-6">Sign up to continue.</p>

        <form id="signup" className="w-full flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
              className="w-full px-3 py-2 border border-[var(--Neutral-White-300)] rounded-md bg-transparent focus:outline-[var(--Neutral-Black-900)] "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="pass" className="text-sm font-medium">
              Password*
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Create password"
              required
              className="w-full px-3 py-2 border border-[var(--Neutral-White-300)] rounded-md bg-transparent focus:outline-[var(--Neutral-Black-900)]"
            />
          </div>

          <Button width="100%" btnTitle="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
