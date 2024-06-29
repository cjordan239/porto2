import React from 'react';
import Header from '@components/atoms/Header';
import SubHeader from '@components/atoms/SubHeader';
import Logo from '@components/atoms/Logo';
import CardProps from '@interface/CardProps';

const Card: React.FC<CardProps> = ({ headerText, subHeaderText, paragraphText, src, alt, width, height }) => {
  return (
    <div className="card flex flex-col items-center p-4 border rounded-lg shadow-lg">
      <Logo
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <Header>{headerText}</Header>
      <SubHeader>{subHeaderText}</SubHeader>
      <p className="text-center">{paragraphText}</p>
    </div>
  );
};

export default Card;
