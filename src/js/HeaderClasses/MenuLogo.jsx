import React from 'react';

export default class MenuLogo extends React.Component {
    render () {
        return (
            <div className="menu_logo">
                <div>
                    <img className="logo" src="../../../assets/images/animIcons/hollow_globe.gif" alt={'UN Logo'}/>
                </div>
                <div className={'dropdown'}>
                    <button className="btn dropbtn">Menu</button>
                    <ul className="dropdown-content menu_list ldt-grow-ltr">
                        {/*USE NAV and A instead of ul  li*/}
                        <li id={'firstLi'}><a href="#">Home</a></li>
                        <li><a onClick={this.props.onModalToggle} href='#'>About</a></li>
                        <li id={'thirdLi'}><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}