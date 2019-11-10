import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class MenuLogo extends React.Component {

    handleClick = () => {
        if (typeof this.props.onModalToggle ==='function') {
            this.props.onModalToggle();
        }
    };
    render () {
        const activeStyle= {
            backgroundColor: 'blue',
        };
        return (
            <div className="menu_logo">
                <div>
                    <img className="logo" src="../../../assets/images/animIcons/hollow_globe.gif" alt={'UN Logo'}/>
                </div>
                <div className={'dropdown flip-box'}>
                    <div className={'flip-box-inner'}>
                        <button className="btn flip-box-front">WTF</button>
                        <ul className="dropdown-content menu_list flip-box-back">
                            <li className={'ldt-slide-bottom-in'}><NavLink to="/" activeStyle={activeStyle} exact >Home</NavLink></li>
                            <li><a onClick={this.handleClick} >About</a></li>
                            <li className={'ldt-slide-top-in'}><NavLink to={'/contact'} activeStyle={activeStyle}>Contact</NavLink></li>
                        </ul>
                     </div>
                </div>
            </div>
        )
    }
}