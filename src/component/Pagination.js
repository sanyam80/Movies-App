import React from 'react'
import "./style.css"
import {useState} from "react";
const Pagination = ({page,goAhead,goBack}) => {
  
  return (
    <div className = "p">
        <button onClick = {goBack} className = "p-3 border-4 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl">Previous</button>
        <button className = "p-3 border-4 border-indigo-500 bg-gray-200 text-indigo-500">{page}</button>
        <button onClick = {goAhead} className = "p-3 border-4 border-indigo-500 text-indigo-500 rounded-r-xl">Next</button>
    </div>
  )
}

export default Pagination