import React from 'react';

export default class SearchModule extends React.Component {
    state = {
        isModuleVisible: true,
        countryName: '',
        className: 'ldt-power-on',
        runningButton: ''
    };
    handleClick = () => {
        this.setState({
            className: 'ldt-power-off'
        });
    };
    handleAnimation = () => {
        if (this.state.className === 'ldt-power-off') {
            this.setState({
                isModuleVisible: false
            })
        }
    };
    handleRunning = () => {
        this.setState({
            runningButton: 'running'
        }, ()=>{
            setTimeout(()=>{
                this.setState({
                    runningButton: ''
                })
            }, 1500)
        });
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        let {countryName} = this.state;
        if(typeof this.props.onSend ==='function') {
            this.props.onSend(countryName);
        }
    };

    render() {
        return (
            <>
                {this.state.isModuleVisible === true
                    ?
                    <article onAnimationEnd={this.handleAnimation} className={'search_module ' + this.state.className}>
                        {/*<h2 >Enter country name</h2>*/}
                        <button className="close_button" onClick={this.handleClick}>X</button>
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

                            <label htmlFor="inp" className="inp">
                                <input type="text" id='inp' name="countryName" value={this.state.countryName}
                                       onChange={this.handleChange} placeholder='&nbsp;' required/>
                                <span className="label">Country name</span>
                                <span className="border"> </span>
                            </label>

                            <button type="submit" className={"search_button ld-ext-right "+ this.state.runningButton} onClick={this.handleRunning}>Search
                                <div className={"ld ld-ring ld-spin"}> </div>
                            </button>
                            <div className="search_error"></div>
                            {/*    includes??*/}
                        </form>
                    </article>
                    :
                    null}
            </>
        )
    }
}