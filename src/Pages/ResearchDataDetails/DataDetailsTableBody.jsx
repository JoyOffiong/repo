import React, { useState } from "react";
import edit from "./Images/edit.png";
import remove from "./Images/delete.png";
import view from "./Images/view.png";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment/moment";
import uuid from "react-uuid";

function DataDetailsTableBody({ editDetails}) {
  const [details, setDetails] = useState([]);


//   fetch Data Details
  const fetchDataDetails = async () => {
    try {
      let response = await axios.get(
        `https://drkbaapbackend-production.up.railway.app/v1/research-datas?page=${1}&limit=${25}`,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlhdCI6MTY3NzE1ODQ1MiwiZXhwIjoxNjc3MTYwMjUyLCJ0eXBlIjoiYWNjZXNzIn0.-l-0ikPqC9yxclLSUeOjNzRzyjPOAvQwRoRh8FNn9fg",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.docs);
      setDetails(response.data.docs);
    } catch (error) {}
  };

//   delete data details
  const deleteCategory = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8050/v1/research-datas/${id}`,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlhdCI6MTY3NzE1ODQ1MiwiZXhwIjoxNjc3MTYwMjUyLCJ0eXBlIjoiYWNjZXNzIn0.-l-0ikPqC9yxclLSUeOjNzRzyjPOAvQwRoRh8FNn9fg",
              "Content-Type": "application/json",
          },
        }
      );
    
      fetchDataDetails()
      console.log('worked')
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataDetails();
  }, []);

  //   CREATE RESEACH DATA

  return (
    <tbody>
        
      {details.map((data) => {
        const { id, icon, description, cost, updatedAt, title, available_for, status} = data;
        return (
          <tr className="bg-purple-100 border-b ">
            <li
              // scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              key={uuid()}
            ></li>
            <td className="px-6 py-4">
              <img className="W-10 h-10"  src={icon} alt="" />
            </td>
            <td className="px-6 py-4">{title}</td>
            <td className="px-6 py-4"> {moment(updatedAt).format("l")}</td>
            <td className="px-6 py-4">{cost}</td>
            <td className="px-6 py-4">{description}</td>
            <td className="px-6 py-4">{status}</td>
            <td className="px-6 py-4">{available_for}</td>
            <td className="md:px-6 py-4 flex gap-1">
              <img src={edit} 
              onClick={ ()=>{editDetails(id)}}
              alt="" />
              <img src={view} alt="" />
              <img src={remove} 
                onClick={ ()=>{deleteCategory(id)}} 
              alt="" />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default DataDetailsTableBody;
