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
                {this.props.countryModuleState === true
                    ?
                    <article className={`country_module ` + this.props.countryModuleClassName} onAnimationEnd={this.handleAnimation} >
                        <div className="close_button close-container" onClick={this.handleClick}>
                            <div className="leftRight"> </div>
                            <div className="rightLeft"> </div>
                        </div>
                        {this.props.children}
                    </article>
                    :
                    null
                }
            </>
        )
    }
}