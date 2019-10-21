import React from 'react';

export default class OtherIndicators extends React.Component {
    render () {
        return (
            <ul className="other_indicators">
                <li className={'ldt-slide-top-in btn btn-primary tooltip'}>
                    <div className="indicator_name">UNEMPLOYED</div>
                    <div className="indicator_icon"><img src={"../../assets/images/animIcons/work.svg"} alt={'work icon'} /></div>
                    <div className="indicator_value">5.2%</div>
                    <div className="bottom">
                        <p className='tooltipText'>
                            Percentage of the <span>labour force</span> population ages 15 and older that is <span>not in paid employment or self-employed</span>
                            but is available for work and has taken steps to <span>seek employment.</span>
                        </p>
                        <i> </i>
                    </div>
                </li>
                <li className={'ldt-rush-left-in btn btn-primary tooltip'}>
                    <div className="indicator_name">GDP</div>
                    <div className="indicator_icon"><img src={"../../assets/images/animIcons/GDP.svg"} alt={'GDP icon'} /></div>
                    <div className="indicator_value">260mld $</div>
                    <div className="bottom">
                        <p className='tooltipText'>
                            Gross domestic products (GDP) is a monetary measure of the <span>market value</span> of all the final
                            <span>goods and services produced in a year</span> in a country.
                        </p>
                        <i> </i>
                    </div>
                </li>

                <li className={'ldt-slide-bottom-in btn btn-primary tooltip'}>
                    <div className="indicator_name">NET USERS</div>
                    <div className="indicator_icon"><img src={"../../assets/images/animIcons/wifi.svg"} alt={'wifi icon'} /></div>
                    <div className="indicator_value">60%</div>
                    <div className="bottom">
                        <p className='tooltipText'>
                            The percentage of population that routinely accesses the internet.
                        </p>
                        <i> </i>
                    </div>
                </li>
                <li className={'ldt-slide-bottom-in btn btn-primary tooltip'}>
                    {/*//Gini din restcountries*/}
                    <div className="indicator_name">GINI</div>
                    <div className="indicator_icon"><img src={"../../assets/images/animIcons/GINI.svg"} alt={'GINI icon'} /></div>
                    <div className="indicator_value">28</div>
                    <div className="bottom">
                        <p className='tooltipText'>
                            Measure of the <span>deviation</span> of the distribution of income among individuals or households within a country
                            from a perfectly equal distribution. A value of <span>0 represents absolute equality</span>, a value of <span>100</span> absolute inequality.
                        </p>
                        <i> </i>
                    </div>
                </li>
                <li className={'ldt-rush-right-in btn btn-primary tooltip'}>
                    <div className="indicator_name">EMISSIONS</div>
                    <div className="indicator_icon"><img src={"../../assets/images/animIcons/carbon.svg"} alt={'co2 icon'} /></div>
                    <div className="indicator_value">2204t</div>
                    <div className="bottom">
                        <p className='tooltipText'>
                            The <span>per capita tonnes</span> of carbon dioxide dispersed into the atmosphere.
                        </p>
                        <i> </i>
                    </div>
                 </li>
             </ul>
        )
    }
}