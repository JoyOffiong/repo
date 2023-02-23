import React from 'react'
import vector from './Images/Vector.png';

function DataDetailsTableHead() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-white  dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S/No
              </th>
              <th scope="col" className="px-6 py-3">
                Icon
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex gap-1">
                 
                  <span>Category</span>
                  <span>
                    <img src={vector} alt="" />
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex gap-1">
                 
                  <span>Date</span>
                  <span>
                    <img src={vector} alt="" />
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex gap-1">
                 
                  <span>Amount</span>
                  <span>
                    <img src={vector} alt="" />
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex gap-1">
                  <span>Description</span>
                  
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex gap-1">
                  <span>Status</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Period
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
  )
}

export default DataDetailsTableHead