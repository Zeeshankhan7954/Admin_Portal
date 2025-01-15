import React from "react";

function UserCard() {
  return (
    <>
      <div className="w-32 h-28 bg-[#F2F5F7] rounded-full m-auto mt-2 border-4 border-[#F2F5F7]">
        <img
          className="w-32 h-28  rounded-full "
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb"
          alt=""
        />
      </div>
      <div className="justify-center m-auto">
        <h1 className="text-2xl mt-4 text-center">Zeeshan </h1>
      </div>
      <div className="justify-center m-auto">
        <h1 className="text-sm  mt-4 text-center">Project Manager</h1>
      </div>
      <div className="p-3">
        <p className="text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, or randomised
          words which don't look even slightly believable. If you are going to
          use a passage.
        </p>
      </div>
    </>
  );
}

export default UserCard;
