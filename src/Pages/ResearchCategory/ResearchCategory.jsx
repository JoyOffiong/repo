import React from "react";

import ReserchDataModel from "./ResearchDataModel";
import { useState } from "react";
import DataTableBody from "./DataTableBody";
import DataTableHead from "./DataTableHead";
import axios from "axios";
// import {BsSearch} from '.react-icons/bs'
// import {BsPlus} from '.react-icons/bs'

function ResearchCategory() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [inputValue, setInputValue] = useState({});

  const [icon, setIcon] = useState("");
  //edit Category
const editCategory = async (id) =>{

    try {
     const response=   await axios.get(
        
          `https://drkbaapbackend-production.up.railway.app/v1/categories/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlhdCI6MTY3NzExNjYwMiwiZXhwIjoxNjc3MTE4NDAyLCJ0eXBlIjoiYWNjZXNzIn0.5KncgRCsyN4UYUxoRMKA5q0z2dS_Sfoe-cShWqE7Hdw",
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
    <div className=" container m-auto mt-10">
      <h3 className="syne  font-semibold text-xl text-blue-700">
        Manage Data Categories
      </h3>
      <p className="md:mt-4 text-gray-500"> Create the data Category</p>
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
            Add Category
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <DataTableHead />
          <DataTableBody
            editCategory={editCategory}
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
        <ReserchDataModel
          icon={icon}
          name={name}
          description={description}
          setIcon={setIcon}
          setName={setName}
          setDescription={setDescription}
          inputValue={inputValue}
          setInputValue={setInputValue}
          editCategory={editCategory}
        />
      ) : null}
    </div>
  );
}

export default ResearchCategory;
