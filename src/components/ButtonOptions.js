import React from 'react';
import { connect } from 'react-redux';

import { setCheckBox, setRadioVal } from '../actions/states';

class ButtonOptions extends React.Component {
    /* constructor(props){
        super(props);
    } */
    handleCheckBox = (e) => {
        // console.log(e.target.value);
        const val = e.target.value;
        this.props.onSetCheckBox(val);
        // console.log(val);
    }

    handleRadioButton = (e) => {
        const val = e.target.value;
        this.props.onSetRadioVal(val);
        // console.log(val);
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props.states);
    }

    render() {
        return (
            <div>
                <form className="options" onSubmit={this.onSubmit}  >
                    <div>
                        <input 
                            type="checkbox" 
                            checked={!!this.props.states.checkBox.includes('A')}
                            value="A"
                            onChange={this.handleCheckBox}
                        />
                        <label> A </label>
                    </div>

                    <div>
                        <input 
                            type="checkbox" 
                            checked={!!this.props.states.checkBox.includes('B')}
                            value="B"
                            onChange={this.handleCheckBox}
                        />
                        <label> B </label>
                    </div>

                    <div>
                        <input 
                            type="checkbox" 
                            checked={!!this.props.states.checkBox.includes('C')}
                            value="C"
                            onChange={this.handleCheckBox}
                        />
                        <label> C </label>
                    </div>

                    <div>
                        <input 
                            type="radio" 
                            value="Yes"
                            name="agree"
                            checked={this.props.states.radioButtonValue === "Yes"}
                            onChange={this.handleRadioButton}
                        />
                        <label> Yes </label>
                    </div>

                    <div>
                        <input 
                            type="radio" 
                            value="No"
                            name="agree"
                            checked={this.props.states.radioButtonValue === "No"}
                            onChange={this.handleRadioButton}
                        />
                        <label> No </label>
                    </div>

                    <div>
                        <input 
                            type="radio" 
                            value="Neutral"
                            name="agree"
                            checked={this.props.states.radioButtonValue === "Neutral"}
                            onChange={this.handleRadioButton}
                        />
                        <label> Neutral </label>
                    </div>

                    <button> submit </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCheckBox : (val) => dispatch(setCheckBox(val)), 
        onSetRadioVal : (val) => dispatch(setRadioVal(val))
    }
}

const mapStateToProps = (state) => {
    return {
        states : state.states 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonOptions);
