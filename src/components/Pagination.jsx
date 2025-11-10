const Pagination = (props) => {


  let pages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalBlog / props.postperpage);
    i++
  ) {
    pages.push(i);
  }

  return (
    <>
      <button
        className="border px-[8px] py-[2px] w-fit cursor-pointer rounded-lg"
        onClick={() => props.setCurrentPage(props.currentPage - 1)}
      >
        <p>Prev</p>
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => props.setCurrentPage(page)}
          className={`border px-[8px] py-[2px] w-full max-w-[40px] cursor-pointer rounded-lg ${
            props.currentPage === page ? 'bg-[var(--Neutral-White-500)]' : ''
          }`}
        >
          {page}
        </button>
      ))}
      <button
        className="border px-[8px] py-[2px] w-fit cursor-pointer rounded-lg"
        onClick={() => props.setCurrentPage(props.currentPage +1)}
      >
        <p>Next</p>
      </button>
    </>
  );
};

export default Pagination;
