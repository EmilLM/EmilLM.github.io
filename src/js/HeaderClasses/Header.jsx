import React, {Component} from 'react';

export default class Header extends Component {
    render () {
        return (
            <header id='header'>
                <div className={'container'}>
                    {this.props.children}
                </div>
            </header>
        )
    }
}



