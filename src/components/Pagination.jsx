/* eslint-disable no-unused-vars */
const Pagination = props => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalBlog / props.postperpage); i++) {
    pages.push(i);
  }

  const lastPage = pages.length;
  if (lastPage < 2) {
    return;
  } else {
    return (
      <>
        {/* Prev Button */}
        <button
          className={`border px-2 py-0.5 w-fit cursor-pointer rounded-lg ${
            props.currentPage === 1
              ? 'opacity-50 pointer-events-none select-none'
              : ''
          }`}
          onClick={() => props.setCurrentPage(props.currentPage - 1)}
        >
          <p>Prev</p>
        </button>

        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => props.setCurrentPage(page)}
            className={`border px-2 py-0.5 w-full max-w-10 cursor-pointer rounded-lg ${
              props.currentPage === page ? 'bg-(--Brand-Green)' : ''
            }`}
          >
            {page}
          </button>
        ))}

        {/* {pages.length <= 5 ? (
        pages.map((page, index) => (
          <button
            key={index}
            onClick={() => props.setCurrentPage(page)}
            className={`border px-[8px] py-[2px] w-full max-w-[40px] cursor-pointer rounded-lg ${
              props.currentPage === page ? 'bg-[var(--Brand-Green)]' : ''
            }`}
          >
            {page}
          </button>
        ))
      ) : (
        <>
          {[1, 2].map(page => (
            <button
              key={page}
              onClick={() => props.setCurrentPage(page)}
              className={`border px-[8px] py-[2px] w-full max-w-[40px] cursor-pointer rounded-lg ${
                props.currentPage === page ? 'bg-[var(--Brand-Green)]' : ''
              }`}
            >
              {page}
            </button>
          ))}
          <span className="px-[8px] py-[2px] max-w-[40px] select-none">...</span>
          {[lastPage - 1, lastPage].map(page => (
            <button
              key={page}
              onClick={() => props.setCurrentPage(page)}
              className={`border px-[8px] py-[2px] w-full max-w-[40px] cursor-pointer rounded-lg ${
                props.currentPage === page ? 'bg-[var(--Brand-Green)]' : ''
              }`}
            >
              {page}
            </button>
          ))}
        </>
      )} */}

        {/* Next Button */}
        <button
          className={`border px-2 py-0.5 w-fit cursor-pointer rounded-lg ${
            props.currentPage === pages.length
              ? 'opacity-50 pointer-events-none select-none'
              : ''
          }`}
          onClick={() => props.setCurrentPage(props.currentPage + 1)}
        >
          <p>Next</p>
        </button>
      </>
    );
  }
};

export default Pagination;
