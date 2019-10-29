import React from 'react';

export default class CountryModule extends React.Component {
    state = {
        isModuleShowing: true,
        className: 'ldt-power-on'
    };

    handleClick = () => {
        this.setState({
            className: 'ldt-power-off'
        });
    };
    handleAnimation = () => {
        if (this.state.className === 'ldt-power-off') {
            this.setState({
                isModuleShowing: false
            })
        }
    };
    render() {
        return (
            <>
                {this.state.isModuleShowing === true
                    ?
                <article className={`country_module ` + this.state.className} onAnimationEnd={this.handleAnimation} >
                    <button id="country_button" className="close_button" onClick={this.handleClick}>X</button>
                    {this.props.children}
                </article>
                    :
                    null
                }
            </>
        )
    }
}