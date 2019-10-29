import React from 'react';

export default class AddCountry extends React.Component {
    state ={
        runningButton: ''
    };
    handleClick = ()=>{
        if (typeof this.props.onToggle ==='function') {
            this.props.onToggle();
        }

        if (this.props.moduleState === false) {
            this.setState({
                runningButton: 'running'
            }, ()=> {
                setTimeout( ()=>{
                    this.setState( {
                        runningButton: ''
                    })
                }, 1000)
            })
        } else {
            this.setState({
                runningButton: ''
            })
        }
    };

    render() {
        return (
            <button id="add_country" onClick={this.handleClick} className={'btn ld-ext-right '+ this.state.runningButton}> Add country
                <div className="ld ld-ring ld-spin"> </div>
            </button>
        )
    }
}
