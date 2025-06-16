import React from "react";
import { Link } from "react-router-dom";

const CondidateItem = ({ condidate }) => {

  return (
    <li className='shadow-[0_15px_20px_-5px_#0D718226]'>
      <Link
        className='w-full flex gap-6 bg-white px-10 py-8 rounded-[5px]'
        to='/about'
      >
        <img className='w-[5.5rem] h-[5.5rem]' src={condidate.image} alt='' />
        <div className='flex flex-col gap-2.5 mr-auto'>
          <div className='flex items-center gap-[1rem]'>
            <span>{condidate.compny}</span>
            <div className='flex items-center gap-2'>
              {condidate.isNew && (
                <span className='block px-2  pt-1.5 pb-1 bg-primary rounded-xl text-white text-[.875rem] uppercase'>
                  new!
                </span>
              )}
              {condidate.isFeatured && (
                <span className='block px-2  pt-1.5 pb-1 bg-title rounded-xl text-white text-[.875rem] uppercase'>
                  featured
                </span>
              )}
            </div>
          </div>
          <h2 className='text-title text-[1.375rem]'>{condidate.job}</h2>
          <div className='flex items-center gap-4 text-gray font-medium'>
            <span>1 day ago</span>
            <span className='w-[4px] h-[4px] bg-gray rounded-full'></span>
            <span>{condidate.workType}</span>
            <span className='w-[4px] h-[4px] bg-gray rounded-full'></span>
            <span>{condidate.workPlace}</span>
          </div>
        </div>
        <ul className='flex items-center gap-4'>
          {condidate.programmingLanguage.map((l, index) => {
            return <li key={index} className="py-1 px-2.5 bg-primary-10 rounded-sm">{l}</li>;
          })}
        </ul>
      </Link>
    </li>
  );
};

export default CondidateItem;
