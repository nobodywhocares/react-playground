import React, {useState} from "react";
import {FaStar} from "react-icons/fa"
import StarRatingFormFunction from "./StarRatingFormFunction";

const Star = ({selected = false, selectionChanged = f => f}) => (
        <FaStar color={selected ? "green" : "grey"} onClick={selectionChanged} />
);

const createArray = (size) => [...Array(size)];

export default function StartRatingFunction({starCountTotalDefault = 5}) {
    const [selectedStarCount, setSelectedStarCount] = useState(0);
    const [starCountTotal, setStarCountTotal] = useState(starCountTotalDefault);
    
    const starCountChanged = (starCount) => {
        setSelectedStarCount(0);
        setStarCountTotal(starCount);
    };
    // Use <></> <React.Fragment> instead of no-op <div>
    return (
        <React.Fragment>
            <StarRatingFormFunction starCountDefault={starCountTotal}
                starCountChanged={starCountChanged}/>
            {createArray(starCountTotal).map((cnt, idx) => (
                    <Star key={idx}
                        selected={idx < selectedStarCount}
                        selectionChanged={() => setSelectedStarCount(idx+1)}
                        />
            ))}
            <p>{selectedStarCount} of {starCountTotal} selected</p>
        </React.Fragment>
    );
};
