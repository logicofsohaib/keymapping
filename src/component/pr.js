import React from 'react';
import Card from './card'; // Assuming the Card component is in the same directory
import data from "../api/app.json"
const Pr = () => {
  

  return (
    <div className='grid max-w-[1440px] mt-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-10 mx-auto'>
      {data.map((cardData, index) => (
        <Card
          key={index} // Adding a unique key for each card
          title={cardData.title}
          imageUrl={cardData.imageUrl}
          description={cardData.description}
          author={cardData.author}
          date={cardData.date}
          imageSrc={cardData.imageSrc}
          netflixLink={cardData.netflixLink}
        />
      ))}
    </div>
  );
};

export default Pr;




