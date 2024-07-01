import React from "react";
import Header from "@components/atoms/Header";
import SubHeader from "@components/atoms/SubHeader";
import MainButton from "@components/atoms/MainButton";

const Section5 = () => {
  return (
    <div className="flex justify-center items-center p-8 gap-4  bg-zinc-200">
      <div className="p-4 max-w-xs">
        <Header>
          Helping a local <br />
          <span className="text-green-400">business reinvent itself</span>
        </Header>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <i className="text-3xl text-green-600 mb-2">👥</i>
          <p>2,245,341<br />Members</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <i className="text-3xl text-green-600 mb-2">🚴</i>
          <p>46,328<br />Clubs</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <i className="text-3xl text-green-600 mb-2">📅</i>
          <p>828,867<br />Event Bookings</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <i className="text-3xl text-green-600 mb-2">💳</i>
          <p>1,926,436<br />Payments</p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
