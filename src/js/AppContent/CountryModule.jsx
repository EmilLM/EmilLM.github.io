import React from 'react';

export default class CountryModule extends React.Component {
    state = {
        isModuleShowing: true,
        className: 'ldt-power-on'
    };

    handleClick = () => {
        this.setState({
            className: 'ldt-zoom-out'
        });
    };
    handleAnimation = () => {
        if (this.state.className === 'ldt-zoom-out') {
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
                    <div className="close-container" onClick={this.handleClick}>
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