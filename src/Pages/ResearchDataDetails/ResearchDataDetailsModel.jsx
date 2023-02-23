import React from "react";
import { useState } from "react";
import axios from "axios";

function ResearchDataDetailsModel({
  setTitle, title,
  setDescription,  description,
  setLink, link,
  setAvailable_for, available_for,
  setStatus, status,
  cost, setCost,
  setInputValue,
  inputValue,
  editDetails
}) {
  const [show, setShow] = useState(true);


  const closeModal = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    setAvailable_for(e.target.value);
    setStatus(e.target.value);
    setCost(e.target.value);
    setDescription(e.target.value);
    setLink(e.target.files[0]);
   
  };

// const[info, setInfo]= useState

// Create Data Details
  const createDataDetails = async (e) => {
    console.log(cost)
    e.preventDefault()
    
    let headersList = {
     "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImlhdCI6MTY3NzE1ODQ1MiwiZXhwIjoxNjc3MTYwMjUyLCJ0eXBlIjoiYWNjZXNzIn0.-l-0ikPqC9yxclLSUeOjNzRzyjPOAvQwRoRh8FNn9fg" ,
     "Content-Type": "multipart/form-data"
    }
    
    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description",description);
    formdata.append("available_for",available_for);
    formdata.append("status", status);
    formdata.append("categoryId", 2);
    formdata.append("cost", 55);
    formdata.append("link", link);
    
    let bodyContent =  formdata;
    
    let reqOptions = {
      url: "https://drkbaapbackend-production.up.railway.app/v1/research-datas",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }
    
    let response = await axios.request(reqOptions);
    console.log(response.data);
    
   
  };

    return (
        <div
          className={`fixed w-full h-full block left-0 top-0 right-0 z-11 items-center 
        ${show ? "block" : "hidden"}`}
          style={{ background: "rgba(0, 40, 40, 0.25)" }}
        >
          <div className="relative   md:w-2/3 w-full px-4 h-full mx-auto  ">
            {/* Modal content */}
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700 md:w-full">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={closeModal}
                >
                  {" "}
                  Close
                </button>
              </div>
              <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                <h3 className=" dark:text-white text-center syne  font-semibold text-xl text-blue-700">
                  Add Details
                </h3>
                <div className=" md:h-20 md:py-1 md:px-4 border-dashed border-4 border-sky-500 ">
                  <input
                    type="file"
                    id="myFileInput"
                    name="myFileInput"
                    className="bg-gray-200 border border-gray-300 text-center block w-full h-16 pl-8 pt-4 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Name of Category
                  </label>
                  <input
                    type="text"
                    name="Category_name"
                    id="Category"
                    placeholder="Course title"
                    className="bg-gray-50 border border-gray-300 w-full text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-8 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                    value={editDetails?(inputValue.title):''}
                  />
                </div>

                <div className='flex gap-5'>
                <div className='w-1/3'>
                  <label
                    htmlFor="number"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Cost of Research
                  </label>
                  <input
                    type="number"
                    placeholder="Cost of Research"
                    className="bg-gray-50 border border-gray-300 w-full text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pl-8 py-3"
                    required
                    onChange={handleChange}
                    value={editDetails?(inputValue.cost):''}
                  />
                </div>
                <div className='w-1/3'>
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                   Availability
                  </label>
                  <input
                    type="number"
                    name="Category_name"
                    id="Category"
                    placeholder="30days?"
                    className="bg-gray-50 border  border-gray-300 w-full text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pl-8 py-3"
                    required
                    onChange={handleChange}
                    value={editDetails?(inputValue.available_for):''}
                  />
                </div>
                <div className='w-1/3'>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    name="Category_name"
                    id="Category"
                    placeholder="Available?"
                    className="bg-gray-50 border pl-8 py-3 border-gray-300 w-full text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                    value={editDetails?(inputValue.status):''}
                  />
                </div>
                </div>

                
                <div>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description_name"
                    id="description"
                    placeholder="Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 md:px-32 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                    value={editDetails?(inputValue.description):''}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={(e) => createDataDetails(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default ResearchDataDetailsModel