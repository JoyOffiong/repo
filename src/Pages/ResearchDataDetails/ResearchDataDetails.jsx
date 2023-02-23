import React from "react";

import ResearchDataDetailsModel from "./ResearchDataDetailsModel";
import { useState } from "react";
import DataDetailsTableBody from "./DataDetailsTableBody";
import DataDetailsTableHead from "./DataDetailsTableHead";
import axios from "axios";


function ResearchDataDetails() {
  const [form, setForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0)
  const [available_for, setAvailable_for] = useState(0)
  const [status, setStatus] = useState("")

  const [inputValue, setInputValue] = useState({});

  const [link, setLink] = useState("");
  //edit Category
const editDetails = async (id) =>{

    try {
     const response=   await axios.get(
        
          `https://drkbaapbackend-production.up.railway.app/v1/research-datas/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlhdCI6MTY3NzE1ODQ1MiwiZXhwIjoxNjc3MTYwMjUyLCJ0eXBlIjoiYWNjZXNzIn0.-l-0ikPqC9yxclLSUeOjNzRzyjPOAvQwRoRh8FNn9fg",
                "Content-Type": "application/json",
            },
          }
        );
        setForm(true)
        console.log(response.data)
        setInputValue(response.data)
      
      } catch (err) {
        console.log(err);
      }
}

  function showForm() {
    setForm(!form);
    console.log("showform");
  }

  return (

         <div className=" pt-8  bg-gray-100" >
      <div className="w-11/12 mx-auto">
      <h3 className="syne text-left font-semibold text-xl text-blue-700">
        Data
      </h3>
      <div className="bg-white">
      <div className="flex flex-row bg-white p-2  md:p-4 mt-2 items-baseline justify-between md:flex-row md:mt-5">
        <div className="flex flex-row md:flex-row gap-2 md:gap:4 items-center ">
          <span>show</span>
          <select className="bg-gray-300 w-12 h-7 rounded-md">
            <option value>10</option>
            <option value={1}>11</option>
            <option value={2}>12</option>
            <option value={2}>24</option>
          </select>
          <span className="hidden md:block">entries</span>
          <div className="relative md:block">
            {/* <label aria-controls='' className="relative block"> */}
            <span className="absolute inset-y-0 left-0 flex items-center pl-9">
              {/* <BsSearch/> */}
            </span>
            <input
              type="text"
              placeholder="search..."
              className="h-10 md:w-80 w-4/5 rounded-lg pl-16 border border-gray-400"
            />
            {/* </label> */}
          </div>
        </div>
        <div className="relative">
          {/* <BsPlus/> */}
          <button
            className=" hidden md:block bg-blue-600 p-1 md:py-2 md:pl-8 md:pr-2 text-white font-xs rounded-lg"
            type="button"
            // data-modal-toggle="authentication-modal"
            onClick={showForm}
          >
            Add Data
          </button>
          <button className="md:hidden"   onClick={showForm} >
           Add
          </button>

        </div>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <DataDetailsTableHead />
          <DataDetailsTableBody
            editDetails={editDetails}
          />
        </table>

        <div className="bg-white">
          <div className="w-1/3 py-5 m-auto flex items-center justify-center gap-3">
            <h3 className="text-gray-400">Previous</h3>
            <p className="bg-purple-500 py-1 px-3 rounded-lg">1</p>
            <p className="bg-gray-300 py-1 px-3 rounded-lg ">2</p>
            <p className="bg-gray-300 py-1 px-3 rounded-lg">3</p>
            <h3 className="text-gray-400">Next</h3>
          </div>
        </div>
      </div>
      {form ? (
        <ResearchDataDetailsModel
          link={link}
          title={title}
          description={description}
          cost={cost}
          status={status}
          available_for = {available_for}
          setLink={setLink}
          setTitle={setTitle}
         setCost = {setCost}
          setStatus = {setStatus}
          setAvailable_for = {setAvailable_for}
          setDescription={setDescription}
          inputValue={inputValue}
          setInputValue={setInputValue}
          editDetails={editDetails}
        />
      ) : null}
      </div>
      </div>
      
    </div>

   
  );
}

export default ResearchDataDetails;
