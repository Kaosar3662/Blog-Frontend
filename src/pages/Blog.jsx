import BlogCard from '../components/Blogcard';

const Blog = () => {
  return (
    <main className="gap-[50px] mt-[80px] md:mt-0 px-[16px]">
      <div className="grid w-full gap-8 max-w-[1200px]">
        <div className="grid place-content-center  ">
          <h1>All Blog</h1>
          <p>Subtitle is gonna be here</p>
        </div>
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <div className="w-full grid-cols-2 h-fit"></div>
    </main>
  );
};

export default Blog;
