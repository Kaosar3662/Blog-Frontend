import PrimaryBtn from '../components/primary-btn';
import BlogCard from '../components/Card/Blogcard';
import { data } from '../pages/Blog';

const Details = () => {
  return (
    <div className="min-h-screen px-4 my-20 ">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
            <div>
              <h2>Title</h2>
              <p>Subtitle</p>
            </div>
            <div className="flex gap-4 items-center">
              <PrimaryBtn btnTitle="Edit" className="h-fit" />
              <PrimaryBtn btnTitle="Delete" className="h-fit" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap=2" >
              <img
                src="https://mkt.cdnpk.net/web-app/media/freepik-4-2000.webp"
                alt=""
                className="rounded-lg"
              />
              <div className="flex gap-2 flex-col sm:flex-row sm justify-between">
                <p>Category</p>
                <p>Date</p>
              </div>
            </div>
            <div>
              Details Details Details Details Details Details Details Details
              Details Details Details Details Details Details Details Details
            </div>
            <div className='flex flex-col gap-4'>

            <div className="flex flex-col gap-5">
              <h5>Featured Blogs</h5>
              <div className="flex flex-col sm:flex-row gap-4">
                <BlogCard data={data[1]} />
                <BlogCard data={data[2]} />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h5>Recent Blogs</h5>
              <div className="flex flex-col sm:flex-row gap-4">
                <BlogCard data={data[3]} />
                <BlogCard data={data[4]} />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
