import React from 'react';

export default class MenuLogo extends React.Component {

    handleClick = () => {
        if (typeof this.props.onModalToggle ==='function') {
            this.props.onModalToggle();
        }
    };
    render () {
        return (
            <div className="menu_logo">
                <div>
                    <img className="logo" src="../../../assets/images/animIcons/hollow_globe.gif" alt={'UN Logo'}/>
                </div>
                <div className={'dropdown flip-box'}>
                    <div className={'flip-box-inner'}>
                        <button className="btn flip-box-front">Menu</button>
                        <ul className="dropdown-content menu_list flip-box-back">
                            <li className={'ldt-slide-bottom-in'}><a href="https://www.coderslab.ro/" target={'_blank'}>Home</a></li>
                            <li><a onClick={this.handleClick} href='#'>About</a></li>
                            <li className={'ldt-slide-top-in'}><a href="#">Contact</a></li>
                        </ul>
                     </div>
                </div>
            </div>
        )
    }
}