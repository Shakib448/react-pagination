import React from 'react'

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/ postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(pageNumber =>(
                    <li key={pageNumber} className="page-item">
                        <button onClick={() => paginate(pageNumber)}  className="page-link">
                            {pageNumber}
                        </button>
                    </li>
                ))}
            </ul>    
        </nav>
    )
}
