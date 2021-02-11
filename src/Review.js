import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [count, setCount] = useState(0);
    
    const prevBtn = () => {
        setCount(prevCount => {
            if(prevCount === 0){
                return prevCount = people.length - 1;
            }
            return prevCount -= 1;
        }) ;
    };

    const nextBtn = () => {
        setCount(prevCount => {
            if(prevCount === people.length - 1) {
                return prevCount = 0;
            }
            return prevCount += 1;
        });
    };

    const randomBtn = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setCount(randomNumber);
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={people[count].image} alt={people[count].name} className="person-img" />
                <span className="quote-icon"><FaQuoteRight /></span>
            </div>
            <h4 className="author">{people[count].name}</h4>
            <p className="job">{people[count].job}</p>
            <p className="info">{people[count].text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevBtn}><FaChevronLeft /></button>
                <button className="next-btn" onClick={nextBtn}><FaChevronRight /></button>
            </div>
            <button className="random-btn" onClick={randomBtn}>surprise me</button>
        </article>
    );
};

export default Review;
