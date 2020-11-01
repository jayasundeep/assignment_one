import React from 'react';

class ButtonOptions extends React.Component {
    state = {
        checkBox : [],
        radioButtonValue : ""
    }

    handleCheckBox = (e) => {
        // console.log(e.target.value);
        const val = e.target.value;
        let present;
        let temp = [];
        this.state.checkBox.map((x) => {
            if(x === val){
                present = true;
                return x;
            }else{
                temp.push(x);
                return x;
            }
        })

        if(!present){
            temp.push(val)
            this.setState({
                checkBox : temp
            })
        }else{
            this.setState({
                checkBox : temp
            })
        }
    }

    handleRadioButton = (e) => {
        const val = e.target.value;
        this.setState({
            radioButtonValue : val
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form className="options" onSubmit={this.onSubmit}  >
                    <div>
                        <input 
                            type="checkbox" 
                            checked={this.state.checkBox.A}
                            value="A"
                            onChange={this.handleCheckBox}
                        />
                        <label> A </label>
                    </div>

                    <div>
                        <input 
                            type="checkbox" 
                            checked={this.state.checkBox.B}
                            value="B"
                            onChange={this.handleCheckBox}
                        />
                        <label> B </label>
                    </div>

                    <div>
                        <input 
                            type="checkbox" 
                            checked={this.state.checkBox.C}
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
                            onChange={this.handleRadioButton}
                        />
                        <label> Yes </label>
                    </div>

                    <div>
                        <input 
                            type="radio" 
                            value="No"
                            name="agree"
                            onChange={this.handleRadioButton}
                        />
                        <label> No </label>
                    </div>

                    <div>
                        <input 
                            type="radio" 
                            value="Neutral"
                            name="agree"
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

export default ButtonOptions;
