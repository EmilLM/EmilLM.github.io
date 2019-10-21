import React from 'react';

export default class CountryModule extends React.Component {
    state = {
        isModuleShowing: true
    };

    handleClick= () => {
        this.setState( {
            isModuleShowing: false
        });
    };

    render() {
        return (
            <>
                {this.state.isModuleShowing === true
                    ?
                <article className="country_module ldt-zoom-in " >
                    <button id="country_button" className="close_button" onClick={this.handleClick}>X</button>
                    {this.props.children}
                </article>
                    :
                    <article className="country_module ldt-bounce-out " >
                        <button id="country_button" className="close_button" onClick={this.handleClick}>X</button>
                        {this.props.children}
                    </article>}
            </>
        )
    }
}