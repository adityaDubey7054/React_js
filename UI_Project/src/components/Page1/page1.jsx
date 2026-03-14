import React from "react";
import Navbar from "./navbar";
import Page1Content from "./Page1Content";


function Page1(props)  {
  return (
    <div className=" min-h-screen w-full text-black p-4">
      <Navbar />
      <Page1Content  users={props.users} />
    </div>
  );
}

export default Page1;
