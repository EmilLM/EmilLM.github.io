import React from 'react';

export default class MenuLogo extends React.Component {
    render () {
        return (
            <div className="menu_logo">
                <div>
                    <img className="logo" src="../../../assets/images/UNlogowhite.png" alt={'UN Logo'}/>
                </div>
                <div className={'dropdown'}>
                    <button className="dropbtn">Menu</button>
                    <ul className="dropdown-content menu_list ldt-grow-rtl">
                        {/*USE NAV and A instead of ul  li*/}
                        <li id={'firstLi'}><a href="#">Home</a></li>
                        <li><a href="#" >About</a></li>
                        <li id={'thirdLi'}><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}