import React from "react";
import Button from "../components/Button/Button";

function Form() {
  return (
    <div className="min-h-screen px-6 flex flex-col  gap-4">
      <div className="text-3xl py-3 font-bold">
        <p> Connect With Me!</p>
      </div>
      <form className="flex flex-col gap-6 pb-6">
        <div className="flex flex-col gap-3">
          <label className="font-semibold">Nama Lengkap</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-sm"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold">Nama Panggilan</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-sm"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold">Nomor Handphone</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-sm"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold">Message</label>
          <textarea
            className="textarea textarea-primary"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="flex justify-end font-bold">
          <Button text={"Submit"} />
        </div>
      </form>
    </div>
  );
}

export default Form;
