import Button from "../components/primary-btn"

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-(--Neutral-White-300) gap-6">
      <h1>Contact us</h1>
      <div className="w-full max-w-[600px] p-6 rounded-xl border border-(--Neutral-White-300) bg-(--Neutral-White)">
        <form action="" id="contactForm" className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              id="fnameInput"
              placeholder="Enter your first name"
              required
              className="w-full border border-(--Neutral-White-300) rounded-lg px-4 py-2 bg-transparent focus:border-(--Neutral-Black-900) focus:outline-none"
            />
            <input
              type="text"
              id="lnameInput"
              placeholder="Enter your last name"
              required
              className="w-full border border-(--Neutral-White-300) rounded-lg px-4 py-2 bg-transparent focus:border-(--Neutral-Black-900) focus:outline-none"
            />
          </div>
          <input
            type="email"
            id="mailInput"
            placeholder="Enter your e-mail"
            required
            className="w-full border border-(--Neutral-White-300) rounded-lg px-4 py-2 bg-transparent focus:border-(--Neutral-Black-900) focus:outline-none"
          />
          <input
            type="tel"
            id="phoneInput"
            placeholder="Enter your phone number"
            required
            className="w-full border border-(--Neutral-White-300) rounded-lg px-4 py-2 bg-transparent focus:border-(--Neutral-Black-900) focus:outline-none"
          />
          <input
            type="text"
            id="msgInput"
            placeholder="Enter the subject to discuss"
            required
            className="w-full border border-(--Neutral-White-300) rounded-lg px-4 py-2 bg-transparent focus:border-(--Neutral-Black-900) focus:outline-none"
          />
          <textarea
            id="messageInput"
            placeholder="Write your message"
            required
            className="w-full border border-(--Neutral-White-300) rounded-lg px-4 py-2 bg-transparent min-h-[120px] focus:border-(--Neutral-Black-900) focus:outline-none"
          ></textarea>
          <div className="mt-2">
            <Button btnTitle="Send Message" type="submit" className="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;