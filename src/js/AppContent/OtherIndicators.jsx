import React from 'react';

export default class OtherIndicators extends React.Component {
    render () {
        let {dataIP, dataCode} = this.props;
                if (dataCode === false) {
                     return <img style={{margin: '8vh auto', width:'8vw', height: 'auto'}} src={'../../assets/images/animIcons/earth_loading.svg'} alt={'loading icon'}/>
                } else {
                     return   <ul className="other_indicators ip_module">
                                    <li className={'ldt-slide-left-in tooltip '}>
                                        <div className="indicator_name">UNEMPLOYED</div>
                                        <div className="indicator_icon"><img src={"../../assets/images/animIcons/work.svg"} alt={'work icon'} /></div>
                                        <div className="indicator_value">{dataCode[1][5].value}{dataCode[1][5].value?'%':'N/A'}</div>
                                        <div className="bottom">
                                            <p className='tooltipText'>
                                                Percentage of the <span>labour force</span> population ages 15 and older that is <span>not in paid employment or self-employed </span>
                                                but is available for work and has taken steps to <span>seek employment.</span>
                                            </p>
                                            <i> </i>
                                        </div>
                                    </li>
                                    <li className={'ldt-slide-bottom-in tooltip'}>
                                        <div className="indicator_name">GDP GROWTH</div>
                                        <div className="indicator_icon"><img src={"../../assets/images/animIcons/growth.svg"} alt={'GDP icon'} /></div>
                                        <div className="indicator_value">{dataCode[1][1].value}{dataCode[1][1].value?'%':'N/A'}</div>
                                        <div className="bottom">
                                            <p className='tooltipText'>
                                               The annual increase in gross domestic products (GDP), which is a monetary measure of the <span>market value</span> of all the final
                                                <span>goods and services produced in a year</span> in a country.
                                            </p>
                                            <i> </i>
                                        </div>
                                    </li>
                                    <li className={'ldt-slide-top-in tooltip'}>
                                        <div className="indicator_name">GINI</div>
                                        <div className="indicator_icon"><img src={"../../assets/images/animIcons/GINI.svg"} alt={'GINI icon'} /></div>
                                        <div className="indicator_value">{dataIP?dataIP[0].gini:''}{dataIP[0].gini?'':'N/A'}</div>
                                        <div className="bottom">
                                            <p className='tooltipText'>
                                                Measure of the <span>deviation</span> of the distribution of income among individuals or households within a country
                                                from a perfectly equal distribution. A value of <span>0 represents absolute equality</span>, a value of <span>100</span> absolute inequality.
                                            </p>
                                            <i> </i>
                                        </div>
                                    </li>
                                    <li className={'ldt-slide-bottom-in tooltip'}>
                                        <div className="indicator_name">NET USERS</div>
                                        <div className="indicator_icon"><img src={"../../assets/images/animIcons/wifi.svg"} alt={'wifi icon'} /></div>
                                        <div className="indicator_value">{dataCode[1][4].value}{dataCode[1][4].value?'%':'N/A'}</div>
                                        <div className="bottom">
                                            <p className='tooltipText'>
                                                The % of population that routinely accesses the internet.
                                            </p>
                                            <i> </i>
                                        </div>
                                    </li>
                                    <li className={'ldt-slide-right-in tooltip'}>
                                        <div className="indicator_name">INFLATION</div>
                                        <div className="indicator_icon"><img src={"../../assets/images/animIcons/inflat.svg"} alt={'C02 icon'} /></div>
                                        <div className="indicator_value">{dataCode[1][2].value}{dataCode[1][2].value?'%':'N/A'}</div>
                                        <div className="bottom">
                                            <p className='tooltipText'>
                                                Inflation is a quantitative measure of the rate at which the <span>average price level</span> of a basket of selected goods
                                                and services in an economy <span>increases</span> over a period of time.
                                                Inflation indicates a <span>decrease in the purchasing power</span> of a nation’s currency.
                                            </p>
                                            <i> </i>
                                        </div>
                                     </li>
                                </ul>
                }
    }
}