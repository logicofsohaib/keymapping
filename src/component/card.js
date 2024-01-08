import React from 'react';

function Card(props) {
  const { title, description, author, date, imageUrl } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 margin top-4">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Author: {author}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Date: {date}
        </span>
      </div>
    </div>
  );
}

export default Card;
