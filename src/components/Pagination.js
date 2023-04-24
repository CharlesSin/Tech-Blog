const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className="pagination">
        <li key="previous" className="pageItem">
          <a className="pageLink" onClick={() => onPageChange(currentPage - 1)}>
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"></path>
            </svg>
          </a>
        </li>
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? "pageItemActive" : "pageItem"}>
            <a className="pageLink" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        <li key="next" className="pageItem">
          <a className="pageLink" onClick={() => onPageChange(currentPage + 1)}>
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
