import React, {Component} from 'react';

export default class Header extends Component {
    render () {
        return (
            <header className='nav_header'>
                <div className={'container'}>
                    {this.props.children}
                </div>
            </header>
        )
    }
}



