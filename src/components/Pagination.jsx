const Pagination = (props) => {
  let pages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalProducts / props.postperpage);
    i++
  ) {
    pages.push(i);
  }

  return (
    <>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => props.setCurrentPage(page)}
        className={`border px-[8px] py-[2px] w-full cursor-pointer ${props.currentPage === page ? 'bg-yellow-500' : ''}`}
        >
          {page}
        </button>
      ))}
    </>
  );
};

export default Pagination;
