import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Category = ({item}) => {
  return (
    <div className='card p-2 m-2 border shadow-sm' >
        <div className="card-title d-flex flex-row align-items-center justify-content-between border-bottom px-2">
            <h4 className='text-start px-2'>{item?.name}</h4>
            <FontAwesomeIcon className='text-warning' icon={faEdit} />
        </div>
        <div className="card-body d-flex flex-wrap">
            {item?.products.map((product)=> <span className="badge fw-lighter fs-6 bg-light text-dark m-2">{product}</span> )}
        </div>
        
    </div>
  )
}
