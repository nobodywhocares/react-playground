

import React, {Component} from "react";


export default class StarRatingFormClass extends Component {
        
        constructor(props) {
            super(props)
            this.state = {
                starCount: this.props.starCount,
                starCountValid: true
            }
            this.starCountValueChanged = this.starCountValueChanged.bind(this);
            this.starCountSubmitted = this.starCountSubmitted.bind(this);
            this.starCountRef = React.createRef();
        }
        
        // Must have an onChange to input to avoid read only field
        // but only propagate if onSubmit
        starCountValueChanged(evt) {
            const starCountValue = this.starCountRef.current.value;
            // validate both an integer or string value
            const starCountValid = Number.isInteger(starCountValue) || /^\d+$/.test(starCountValue);
            this.setState({starCount: starCountValue, starCountValid: starCountValid});
        }
        
        starCountSubmitted(evt) {
            evt.preventDefault();
            if (this.state.starCountValid) {
                this.props.starCountChanged(parseInt(this.state.starCount));
            }
        }
        
        render() {
            const {starCountValid} = this.state;
            const borderColor = starCountValid ? 'black' : 'red';
            return (
                    <form onSubmit={this.starCountSubmitted}>
                        <input ref={this.starCountRef} type="text"
                            value={this.state.starCount}
                                onChange={this.starCountValueChanged}
                                placeholder="desired star count..."
                                    required
                                style={{borderColor: borderColor}}
                                />
                        <button>Submit</button>
                        {starCountValid ? '' : 'Star count must be an integer'}
                    </form>
            );
        }
}
