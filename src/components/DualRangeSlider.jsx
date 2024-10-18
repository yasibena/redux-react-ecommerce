import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './DualRangeSlider.css'; // Make sure to import your CSS
import { filterAndSortCombine } from '../Redux/feature/ProductSlice';

const DualRangeSlider = ({ getMinAndMax }) => {
    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(1000000);


    const minRangeValueGap = 6;

    const minPercentage = (minRange / 1000000) * 100; // Assuming max value is 100

    const maxPercentage = 100 - (maxRange / 1000000) * 100;

    useEffect(() => {
        if (maxRange - minRange < minRangeValueGap) {
            if (minRange < maxRange) {
                setMinRange(maxRange - minRangeValueGap);

            } else {
                setMaxRange(minRange + minRangeValueGap);
            }

        }

        getMinAndMax({ min: minRange, max: maxRange })
    }, [minRange, maxRange]);



  
    return (
        <div className="double_range_slider_box">
            <div className="double_range_slider">
                <span
                    className="range_track"
                    style={{
                        right: ` ${minPercentage}%`,
                        left: ` ${maxPercentage}%`,
                    }}
                ></span>

                <input
                    type="range"
                    id='input'
                    className="min"
                    min="0"
                    max="1000000"
                    value={minRange}
                    step="200"
                    onChange={(e) => setMinRange(Number(e.target.value))}
                />
                <input
                    type="range"
                    id='input'
                    className="max"
                    min="0"
                    max="1000000"
                    value={maxRange}
                    step="200"
                    onChange={(e) => setMaxRange(Number(e.target.value))}
                />


            </div>
            <div className='flex justify-between my-2 text-[0.8rem]'>
                <div
                    className="minvalue"

                >
                    {minRange.toLocaleString()}تومان
                </div>
                <span>-</span>
                <div
                    className="maxvalue"

                >
                    {maxRange.toLocaleString()}تومان
                </div>
            </div>
        </div>
    );
};

export default DualRangeSlider;