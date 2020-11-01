import React from 'react';
import { connect } from 'react-redux';

import { setCheckBox, setRadioVal } from '../actions/states';

class ClipBoardControl extends React.Component {
    onCopyState = () => {
        console.log(this.props.states);
        const statesJsonString = JSON.stringify(this.props.states);
        navigator.clipboard.writeText(statesJsonString);
    }
    onApplyState = () => {
        const statesJsonObj = JSON.parse(document.getElementById('apply_state_text').value);
        statesJsonObj.checkBox.map((x) => {
            this.props.onSetCheckBox(x)
        });
        this.props.onSetRadioVal(statesJsonObj.radioButtonValue);
        // document.getElementById('radio_agree').value = statesJsonObj.radioButtonValue;
        // $('#radio_agree').prop('checked', true).trigger('change');
    }
    render() {
        return (
            <div>
                ClipBoardControls
                <div>
                    <input type="text" id="apply_state_text"/>

                    <button
                        onClick={this.onCopyState}
                    > Copy State </button>

                    <button
                        onClick={this.onApplyState}
                    > Apply State </button>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        states : state.states
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCheckBox : (val) => dispatch(setCheckBox(val)), 
        onSetRadioVal : (val) => dispatch(setRadioVal(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClipBoardControl);
