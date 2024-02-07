import React from "react";
import Button from "../components/Button/Button";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../components/Input/Input";

function Form() {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const registerUser = () => {
    event.preventDefault();
    let userData = {
      fullName: formik.values.fullName,
      shortName: formik.values.shortName,
      phoneNumber: formik.values.phoneNumber,
      message: formik.values.message,
    };

    fetch("/api/connect", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsFormSubmit(true);
        setTimeout(() => {
          setIsFormSubmit(false);
          window.location.href = "/";
        }, 3000);
      });
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      shortName: "",
      phoneNumber: "",
      message: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      fullName: yup.string().required("Required"),
      shortName: yup.string().required("Required"),
      phoneNumber: yup.string().matches(/^\d+$/, "Must be a number"),
      message: yup.string().max(255),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <div className="min-h-screen px-6 py-8 flex flex-col gap-4">
      {isFormSubmit && (
        <div role="alert" className="alert alert-success flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Data has submitted, Thank You!</span>
        </div>
      )}
      <div className="text-3xl py-3 font-bold">
        <p> Connect With Me!</p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center gap-6"
      >
        <div className="flex flex-col gap-3">
          <Input
            label="Fullname"
            name="fullName"
            type="text"
            value={formik.values.fullName}
            onChange={handleForm}
            error={formik.touched.fullName && formik.errors.fullName}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Input
            label="Shortname"
            name="shortName"
            type="text"
            value={formik.values.shortName}
            onChange={handleForm}
            error={formik.touched.shortName && formik.errors.shortName}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Input
            label="Phone Number"
            name="phoneNumber"
            type="text"
            value={formik.values.phoneNumber}
            onChange={handleForm}
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Input
            label="message"
            name="message"
            type="text"
            value={formik.values.message}
            onChange={handleForm}
            error={formik.touched.message && formik.errors.message}
          />
        </div>
        <div className="flex justify-end font-bold">
          <Button text={"Submit"} type={"submit"} />
        </div>
      </form>
      
    </div>
  );
}

export default Form;
