import React from 'react';
import Card from '@components/molecules/Card';
import Header from '@components/atoms/Header';
import SubHeader from '@components/atoms/SubHeader';

const Section3 = () => {
  return (
    <div className="text-center mt-5 mb-10 py-8 bg-zinc-200">
      <Header>Manage Your Community in Single System</Header>
      <SubHeader>Who is this suitable for?</SubHeader>
      <div className="flex justify-around mt-4 gap-10">
        <Card
          headerText="Header 1"
          subHeaderText="SubHeader 1"
          paragraphText="This is the first card."
          src="/path/to/image1.jpg"
          alt="Image 1"
          width={100}
          height={100}
        />
        <Card
          headerText="Header 2"
          subHeaderText="SubHeader 2"
          paragraphText="This is the second card."
          src="/path/to/image2.jpg"
          alt="Image 2"
          width={100}
          height={100}
        />
        <Card
          headerText="Header 3"
          subHeaderText="SubHeader 3"
          paragraphText="This is the third card."
          src="/path/to/image3.jpg"
          alt="Image 3"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Section3;
