import React, {useState} from 'react'
import s from "./Paginator.module.css";

let Paginator = (props) => {
    let page = []
    let colPages = Math.ceil(props.TotalCount / props.pagesize)
    for (let i = 1; i <= colPages; i++) {
        page.push(i)
    }
    let portionCount = Math.ceil(colPages/props.portionsize)
    let [portionNumber,SetportionNumber]= useState(1)
    let leftPortionNumber = (portionNumber-1)*props.portionsize + 1
    let rightPortionNumber = portionNumber*props.portionsize

    return <div>
        { portionNumber>1 &&
            <button onClick={()=>{SetportionNumber(portionNumber-1)}}> Prev</button>
        }
            {page
                .filter(p=>p>=leftPortionNumber && p<=rightPortionNumber)
                .map(p =>{
                return <span className={  props.currentPage === p ?  s.selectedPage:s.noselectedPage}
                             key={p}
                             onClick={() => props.SetUserPage(p)}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={()=>{SetportionNumber(portionNumber+1)}}>Next</button>
        }
    </div>
}
export default Paginator