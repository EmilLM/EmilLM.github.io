import React from 'react';

export default class CountryModuleFromSearch extends React.Component {


    handleClick = () => {
        if(typeof this.props.onClose ==='function') {
            this.props.onClose();
        }
    };
    handleAnimation = () => {
        if(typeof this.props.onCountryAnimation ==='function') {
            this.props.onCountryAnimation();
        }
    };
    render() {
        return (
            <>
                {/*if in if pentru o singura loading*/}
                {this.props.countryModuleState === true
                    ?
                    <article className={`country_module ` + this.props.countryModuleClassName} onAnimationEnd={this.handleAnimation} >
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