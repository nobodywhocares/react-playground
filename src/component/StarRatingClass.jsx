

import React, {Component} from "react";
import {FaStar} from "react-icons/fa";
import StarRatingFormClass from "./StarRatingFormClass";

class Star extends Component {
    
        constructor(props) {
            super(props)
        }
    
        render() {
            const {selected, starNo} = this.props
            const {selectionChanged} = this.props
            return (
                <FaStar color={selected ? "red" : "grey"} onClick={() => selectionChanged(starNo)}/>
            );
        }
}

export default class StartRatingClass extends Component {
        
        constructor(props) {
            super(props)
            this.state = {
                starCountTotal: this.props.starCountTotalDefault,
                selectedStarCount: 0
            }
            this.selectionChanged = this.selectionChanged.bind(this);
            this.selectedStarCountChanged = this.selectedStarCountChanged.bind(this);
            this.starCountTotalChanged = this.starCountTotalChanged.bind(this);
        }
        
        selectionChanged(starNo) {
            this.selectedStarCountChanged(starNo+1);
        }
        
        selectedStarCountChanged(starCount) {
            this.setState({selectedStarCount: starCount});
        }
        
        starCountTotalChanged(starCount) {
            this.setState({starCountTotal: starCount, selectedStarCount: 0});
        }
        
        render() {
            const {starCountTotal, selectedStarCount}  = this.state;
            return (
                    <div>
                        <StarRatingFormClass starCount={starCountTotal}
                            starCountChanged={this.starCountTotalChanged}/>
                        {[...Array(starCountTotal)].map((cnt, idx) => (
                                <Star key={idx} starNo={idx}
                                    selected={idx < selectedStarCount}
                                    selectionChanged={this.selectionChanged}
                                    />
                        ))}
                        <p>{selectedStarCount} of {starCountTotal} selected</p>
                    </div>
            );
        }
}