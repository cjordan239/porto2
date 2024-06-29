import React from 'react';
import Card from '@components/molecules/Card';

const Section3 = () => {
  return (
    <div className="flex justify-around">
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
  );
};

export default Section3;
