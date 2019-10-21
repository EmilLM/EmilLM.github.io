import React from 'react';

export default class AddCountry extends React.Component {
    state ={
        runningButton: ''
    };
    handleClick = ()=>{
        if(typeof this.props.onToggle ==='function') {
            this.props.onToggle();
        }
        this.setState({
            runningButton: 'running'
        }, ()=>{
            setTimeout(()=>{
                this.setState({
                    runningButton: ''
                })
            }, 1000)
        });
    };

    render() {
        return (
            <button id="add_country" onClick={this.handleClick} className={'ld-ext-right '+ this.state.runningButton}> Add country
                <div className="ld ld-ring ld-spin"> </div>
            </button>
        )
    }
}
