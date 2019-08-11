import React from 'react'
import { link } from 'fs';

const PagesBtns = ({pages, handlePageChange, activePage}) => {
  const pagesArr = []

  for (let i = 1; i <= pages; i++) {
    pagesArr.push(i)
  }

  return (
    <ul className="pages">
      {activePage === 1 ? "" : <li className="page-btn" onClick={() => handlePageChange(activePage-1)}>Back</li>}
      {pagesArr.map(page => <li className={`page-btn page-btn--number${page === activePage? " active" : ""}`} onClick={() => handlePageChange(page)} key={page}>{page}</li>)}
      {activePage === pages ? "" : <li className="page-btn" onClick={() => handlePageChange(activePage+1)}>Next</li>}
    </ul>
  )
}

export default PagesBtns
