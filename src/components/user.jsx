import React from "react";
import logo from "../img/logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            console.log(res.data);
            history("/dashboard", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User not Registered");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-cl-bgSecondary bg-cover bg-no-repeat " style={{height: "100vh"}}>
      <div className=" flex items-center justify-center md:rounded-xl bg- px-32 py-10 shadow-lg backdrop-blur-md max-sm:px-8 bg-cl-bgPrimary h-full md:h-auto w-full md:w-auto">
        <div className="text-cl-textPrimary">
          <div className="mb-8 flex flex-col items-center sm:w-96">
            <img src={logo} width="120" alt="" srcSet="" />
            <h1 className="mb-2 text-3xl font-bold">Craftlooms</h1>
            <span className="text-cl-50">Enter Login Details</span>
          </div>
          <form onSubmit={handleSubmit} action="POST">
            <div className="m-4 text-lg">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full focus:outline-none focus:ring focus:ring-cl-outline focus:cl-bgSecondary rounded-3xl border-none py-2 text-center text-cl-text2 placeholder-cl-text2 shadow-lg outline-none "
                type="email"
                name="name"
                placeholder="id@email.com"
                required
              />
            </div>

            <div className="relative mb-2 mx-4 text-lg flex items-center focus:outline-none focus:ring focus:ring-cl-outline focus:cl-bgSecondary bg-white rounded-3xl border-none shadow-lg outline-none backdrop-blur-md">
              <div className="w-full">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showpassword ? "password" : "text"}
                className="focus:outline-none focus:ring focus:ring-cl-outline focus:cl-bgSecondary rounded-3xl border-none py-2 text-center text-cl-text2 placeholder-cl-text2 shadow-lg outline-none "
                name="name"
                placeholder="*********"
                required
              />
              </div>
             <div className="absolute right-2">
             <svg
                className="hover:cursor-pointer ml-2"
                onClick={() => setShowpassword(() => !showpassword)}
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9944 15.5C13.9274 15.5 15.4944 13.933 15.4944 12C15.4944 10.067 13.9274 8.5 11.9944 8.5C10.0614 8.5 8.49439 10.067 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5ZM11.9944 13.4944C11.1691 13.4944 10.5 12.8253 10.5 12C10.5 11.1747 11.1691 10.5056 11.9944 10.5056C12.8197 10.5056 13.4888 11.1747 13.4888 12C13.4888 12.8253 12.8197 13.4944 11.9944 13.4944Z"
                    fill="#000"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 5C7.18879 5 3.9167 7.60905 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C16.8112 19 20.0833 16.391 21.8107 14.5202C23.1426 13.0778 23.1426 10.9222 21.8107 9.47978C20.0833 7.60905 16.8112 5 12 5ZM3.65868 10.8366C5.18832 9.18002 7.9669 7 12 7C16.0331 7 18.8117 9.18002 20.3413 10.8366C20.9657 11.5128 20.9657 12.4872 20.3413 13.1634C18.8117 14.82 16.0331 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366Z"
                    fill="#000"
                  ></path>{" "}
                </g>
              </svg>
             </div>
              
            </div>
            <div>
            
            </div>

            <div className="mt-4 flex justify-center text-lg ">
              <button
                type="submit"
                className="rounded-3xl bg-cl-button px-10 py-2 text-cl-bgPrimary font-semibold shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-cl-buttonH"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
