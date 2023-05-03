import React from "react";
import { Link, useRouteError } from "react-router-dom";
import error_bg from "../assets/404_bg.jpg";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section
      style={{ backgroundImage: `url(${error_bg})` }}
      className="flex items-center h-screen p-16 bg-gray-100 text-gray-900"
    >
      <div className="container flex flex-col items-center justify-center  ml-96 pl-96 ">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-5xl text-red-800 mb-8">{error?.message}</p>
          <Link
            to="/"
            className="px-5 py-2 bg-green-700 hover:bg-green-800 rounded w-full mt-4 text-lg font-semibold tracking-wider text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
