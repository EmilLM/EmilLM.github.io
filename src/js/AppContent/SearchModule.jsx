import React from 'react';

export default class SearchModule extends React.Component {
    state = {
        countryName: '',
        runningButton: ''
    };
    handleClick = () => {
        if(typeof this.props.onX ==='function') {
            this.props.onX();
        }
    };
    handleAnimation = () => {
        if (typeof this.props.onAnimation ==='function') {
            this.props.onAnimation();
        }
    };
    handleRunning = () => {
       if (Boolean(this.state.countryName) === true) {
            this.setState( {
                runningButton: 'running'
            }, ()=>{
                setTimeout( () =>{
                    this.setState({
                        runningButton: ''
                    })
                }, 1000)
            })
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        let {countryName} = this.state;
        if (typeof this.props.onSend ==='function') {
            this.props.onSend(countryName);
        }
        if (typeof this.props.onSearch === 'function') {
            this.props.onSearch();
        }
        if (typeof this.props.onErrorChange === 'function') {
            this.props.onErrorChange();
        }
        this.setState({
           countryName: ''
        });

    };

    render() {
        return (
            <>
                {this.props.moduleState === true
                    ?
                    <article onAnimationEnd={this.handleAnimation} className={'search_module ' + this.props.onClass}>
                        <div id='close'>
                            <div className="close-container" onClick={this.handleClick}>
                                <div className="leftRight"> </div>
                                <div className="rightLeft"> </div>
                            </div>
                        </div>

                        <form  autoComplete="off" onSubmit={this.handleSubmit}>

                            <label htmlFor="inp" className="inp" >
                                <input type="text" id='inp' name="countryName" value={this.state.countryName}
                                       onChange={this.handleChange} placeholder='&nbsp;' required />
                                <span className="label">Country name</span>
                                <span className="border"> </span>
                            </label>
                            <div>
                                <button type="submit" className={"btn search_button ld-ext-right "+ this.state.runningButton} onClick={this.handleRunning}>Search
                                    <div className={"ld ld-ring ld-spin"}> </div>
                                </button>
                            </div>


                        </form>

                        {this.props.onError && <div className="search_error">Invalid country name!</div>}

                    </article>
                    :
                    null}
            </>
        )
    }
}