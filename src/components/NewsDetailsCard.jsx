import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)

    return (
        <div className='space-y-5'>
            <img className='w-full object-fit' src={news.image_url} alt="" />
            <h2 className='text-3xl font-bold'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>All News In The Category </Link>
        </div>
    );
};

export default NewsDetailsCard;