import Button from '../components/primary-btn';

const Forget = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-(--Neutral-White-300)">
      <div className="flex flex-col items-center text-center p-8 rounded-lg border bg-(--Neutral-White-200) border-(--Neutral-White-300) text-(--Neutral-Black-900) w-full max-w-md">
        <img src="/logo2.png" alt="logo" className="w-8 md:w-8 mb-4" />
        <h5 className="text-lg md:text-xl font-semibold mb-2">
          Make a new Password
        </h5>

        <form id="login" className="w-full flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-2">
            <label htmlFor="newpass" className="text-sm font-medium">
              New Password*
            </label>
            <input
              type="password"
              name="newpass"
              placeholder="Your new pass"
              required
              className="w-full px-3 py-2 border border-(--Neutral-White-300) rounded-md bg-transparent focus:outline-(--Neutral-Black-900)"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmpass" className="text-sm font-medium">
              Confirm Password*
            </label>
            <input
              type="password"
              name="confirmpass"
              placeholder="Confirm password"
              required
              className="w-full px-3 py-2 border border-(--Neutral-White-300) rounded-md bg-transparent focus:outline-(--Neutral-Black-900)"
            />
          </div>

          <Button type="submit" width="100%" btnTitle="Change password" />
        </form>
      </div>
    </div>
  );
};

export default Forget;
