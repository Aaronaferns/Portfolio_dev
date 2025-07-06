import React from 'react';

export default function ProjectCategoryIntro({ heading, tagline, subheading }) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 bg-transparent ">
      <h2 className="text-2xl font-bold text-center text-gray-100 mb-1">
        {heading} 
      </h2>
      <h5 className='mb-5'>
        <span className=" text-gray-500">{tagline}</span>
      </h5>
      <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto">
        {subheading}
      </p>
      <div className="mt-8 flex justify-center">
        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
          Explore Projects & Theory
        </button> */}
      </div>
    </section>
  );
}
