import React from 'react';

export default class OtherIndicatorsFromSearch extends React.Component {
    render () {
        return (
            <>
                {this.props.countrySearch === false
                    ?
                    <img style={{margin: 'vh auto', width:'8vw', height: 'auto'}} src={'../../assets/images/animIcons/earth_loading.svg'} alt={'loading icon'}/>
                    :
                    <ul className="other_indicators">
                        <li className={'ldt-slide-left-in  tooltip'}>
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
                        <li className={'ldt-slide-bottom-in  tooltip'}>
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

                        <li className={'ldt-slide-top-in tooltip'}>
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
                        <li className={'ldt-slide-bottom-in  tooltip'}>
                            {/*//Gini din restcountries*/}
                            <div className="indicator_name">GINI</div>
                            <div className="indicator_icon"><img src={"../../assets/images/animIcons/GINI.svg"} alt={'GINI icon'} /></div>
                            <div className="indicator_value">{this.props.countrySearch[0].gini}</div>
                            <div className="bottom">
                                <p className='tooltipText'>
                                    Measure of the <span>deviation</span> of the distribution of income among individuals or households within a country
                                    from a perfectly equal distribution. A value of <span>0 represents absolute equality</span>, a value of <span>100</span> absolute inequality.
                                </p>
                                <i> </i>
                            </div>
                        </li>
                        <li className={'ldt-slide-right-in tooltip'}>
                            <div className="indicator_name">EMISSIONS</div>
                            <div className="indicator_icon"><img src={"../../assets/images/animIcons/carbon.svg"} alt={'C02 icon'} /></div>
                            <div className="indicator_value">2204t</div>
                            <div className="bottom">
                                <p className='tooltipText'>
                                    The <span>per capita tonnes</span> of carbon dioxide dispersed into the atmosphere.
                                </p>
                                <i> </i>
                            </div>
                        </li>
                    </ul>
                }
            </>
        )
    }
}