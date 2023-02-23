import React, { useState } from "react";
import edit from "./Images/edit.png";
import remove from "./Images/delete.png";
import view from "./Images/view.png";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment/moment";
import uuid from "react-uuid";

function DataTableBody({ editCategory}) {
  const [data, setData] = useState([]);


//   fetch Categories
  const fetchDataCategories = async () => {
    try {
      let response = await axios.get(
        "https://drkbaapbackend-production.up.railway.app/v1/categories",

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlhdCI6MTY3NzExNjYwMiwiZXhwIjoxNjc3MTE4NDAyLCJ0eXBlIjoiYWNjZXNzIn0.5KncgRCsyN4UYUxoRMKA5q0z2dS_Sfoe-cShWqE7Hdw",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {}
  };

//   delete Category
  const deleteCategory = async (id) => {
    try {
      await axios.delete(
        `https://drkbaapbackend-production.up.railway.app/v1/categories/${id}`,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlhdCI6MTY3NzA4MjAwMSwiZXhwIjoxNjc3MDgzODAxLCJ0eXBlIjoiYWNjZXNzIn0.mkL54hdhTCaz51r2yofxEYF-kFKmstXvZWgMM4Q4_SA",
              "Content-Type": "application/json",
          },
        }
      );
      fetchDataCategories()
      console.log('worked')
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataCategories();
  }, []);

  //   CREATE RESEACH DATA

  const research = data.filter(data=> data.parentId ===2)

  return (
    <tbody>
        
      {research.map((data) => {
        const { id, icon, description, updatedAt, name} = data;
        return (
          <tr className="bg-purple-100 border-b dark:bg-gray-900 dark:border-gray-700">
            <li
              // scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              key={uuid()}
            ></li>
            <td className="px-6 py-4">
              <img className="W-10 h-10"  src={icon} alt="" />
            </td>
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4"> {moment(updatedAt).format("l")}</td>
            <td className="px-6 py-4">{description}</td>
            <td className="md:px-6 py-4 flex gap-1">
              <img src={edit} 
              onClick={ ()=>{editCategory(id)}}
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

export default DataTableBody;
