import { useEffect, useState } from "react";
import styled from "styled-components";

const Pagination = ({pages, setCurrentPage, currentBranches, sortedBranches}) => {

    const numOfPages = [];

    for (let i=1; i <= pages; i++) {
        numOfPages.push(i);
    } 

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])

    return ( 
        <Container>
            <div className="hint-text">Showing <b>{currentBranches.length}</b> out of <b>{sortedBranches.length}</b> entries</div>
            <div className="pagination-margin"></div>
            <ul className="pagination">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' }`}>
                    <a 
                        href="#!"
                        onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                    >
                        Previous
                    </a>
                </li>
                1 2 3 4 
                {
                    numOfPages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item' }`}><a href="#!" className="page-link"
                                onClick = {()=>setCurrentButton(page)}
                            >{page}</a></li> 
                        )
                    })

                }       

                <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item' }`} >
                        <a 
                            href="#!"
                            onClick = { () => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </Container>
    )
}

export default Pagination;


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media only screen and (max-width: 978px) {
        display: flex;
    }

    .hint-text {
        color: var(--color-blue-4);
        font-size: var(--fsize-3);
        margin: 15px 0;

    }   

    .pagination {
        display: flex;
        align-items: center;
        margin: 15px 0;
        color: var(--color-blue-4);
        font-size: var(--fsize-3);
    }

    .pagination-margin {
        /* margin-left: 90px; */
    }

    .pagination li a {
        border: none;
        font-size: var(--fsize-3);
        /* min-width: 30px; */
        /* min-height: 30px; */
        background-color: var(--color-blue-2);
        color: var(--color-blue-4);
        /* margin: 0 2px; */
        line-height: 20px;
        border-radius: 2px !important;
        text-align: center;
        padding: 5px 10px;
    }

    .pagination li a:hover {
        color: #666;
    }	

    .pagination li.active a, 
    .pagination li.active a.page-link {
        background: #03A9F4;
    }

    .pagination li.active a:hover {        
        background: #0397d6;
    }

`;