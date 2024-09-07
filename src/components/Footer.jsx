import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required(" Required!"),
});

export default function Footer() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success("Email sent successfully!");
      resetForm();
    },
  });

  return (
    <div className="max-w-6xl md:mx-auto my-8 mx-4">
      <hr className="w-full max-w-screen-xl border-gray" />

      <p className="text-lg font-bold text-white pt-6">Wallet</p>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="flex md:flex-row flex-col text-white font-semibold md:items-end md:w-2/3 w-full my-4 py-2">
          <p className="mb-2 px-2">Wallet 2020</p>
          <p className="mb-2 px-2">Privacy Policy</p>
          <p className="mb-2 px-2">Cookie Policy</p>
          <p className="mb-2 px-2">Terms of Use</p>
        </div>

        <div className="flex flex-col md:w-1/3 w-full my-4 py-2">
          <div className="mb-4">
            <p className="text-white font-semibold m-2">
              Updates right to your inbox
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col md:flex-row md:items-center"
          >
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-[#333333] text-white border-none rounded-md px-4 py-2 md:w-3/4 mb-2 md:mb-0 md:mr-2 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
            <button
              type="submit"
              className="bg-[#BFAFF2] text-white rounded-md px-6 py-2 md:w-1/4"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
