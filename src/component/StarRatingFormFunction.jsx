

import React, {useState, useRef} from "react";


export default function StarRatingFormFunction({starCountDefault=5, starCountChanged=f=>f}) {
        
        const starCountRef = useRef();
        const [starCount, setStarCount] = useState(starCountDefault);
        const [starCountValid, setStarCountValid] = useState(true);
        
        // Must have an onChange to input to avoid read only field
        // but only propagate if onSubmit
        const starCountValueChanged = (evt) => {
            const starCountValue = starCountRef.current.value;
            // validate both an integer or string value
            setStarCountValid(Number.isInteger(starCountValue) || /^\d+$/.test(starCountValue));
            setStarCount(starCountValue);
        }
        
        const starCountSubmitted = (evt) => {
            evt.preventDefault();
            if (starCountValid) {
                starCountChanged(parseInt(starCount));
            }
        }
        
        const borderColor = starCountValid ? 'black' : 'red';
        return (
                <form onSubmit={starCountSubmitted}>
                    <input ref={starCountRef} type="text"
                        value={starCount}
                            onChange={starCountValueChanged}
                            placeholder="desired star count..."
                                required
                            style={{borderColor: borderColor}}
                            />
                    <button>Submit</button>
                    {starCountValid ? '' : 'Star count must be an integer'}
                </form>
        );
}
