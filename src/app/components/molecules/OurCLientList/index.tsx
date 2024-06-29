import React from "react";
import CostumeImage from "@components/atoms/CostumeImage";
import { clientList } from "@components/lib/data";
import Header from "@components/atoms/Header";
import SubHeader from "@components/atoms/SubHeader";

const OurClientList = () => {
  return (
    <div className="text-center mt-5 mb-10">
      <Header>
        Our Client
      </Header>
      <SubHeader>
        We have been working with some Fortune 500+ clients
      </SubHeader>
      <div className="flex justify-around mt-4 gap-10">
        {clientList.map((client, index) => (
          <CostumeImage
            key={index}
            src={client.src}
            alt={client.name}
            width={50}
            height={50}
            className="rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClientList;
