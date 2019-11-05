import React from 'react';

export default class CountryDetails extends React.Component {

    render() {
        let {dataIP} = this.props;
        return (
            <>
                {dataIP === false
                    ?
                <img style={{margin: '8vh auto', width:'8vw', height: 'auto'}} src={'../../assets/images/animIcons/earth_loading.svg'} alt={'loading icon'}/>
                    :
                <>
                <div id='countryIP' className="country_details ">
                    <a href={"https://en.wikipedia.org/wiki/" + this.props.ipCountry} target="_blank">
                    <img className="flag ldt-blur-in" src={dataIP[0].flag} alt={'flag'} />
                    </a>
                    <div className="currency_country ldt-slide-bottom-in">
                        <div className="countryName">{dataIP[0].name}</div>
                        <div className="currency">{dataIP[0].currencies[0].code}</div>
                        <div className="language">{dataIP[0].languages[0].name} </div>
                    </div>
                </div>
                <ul id='mainIndicators' className="main_indicators ldt-fall-in">
                    <li className='tooltip'>
                        <img src={"../../assets/images/population.png"} alt={'population icon'} />
                        <span className="age_value"> <span>Median age:</span> 42</span>
                        {/*{this.props.dataCode?this.props.dataCode.indicator_value[this.props.countryCode][47906][2015]:'' }*/}
                        <div className="right">
                            <p className='tooltipText'>
                                The average age of a country's population.
                            </p>
                            <i> </i>
                        </div>
                    </li>
                    <li className='tooltip'>
                        <img src={"../../assets/images/income.png"} alt={'income icon'} />
                        <span className="income_value"> <span>GNI: </span> 23.000$</span>
                        <div className="right">
                            <p className='tooltipText'>
                                <span>GNI per capita</span> is the total amount of money earned by a nation's citizens and businesses across the world,
                                minus the income of non-citizens residents, converted to international dollars using PPP rates.
                            </p>
                            <i> </i>
                        </div>
                    </li>
                    <li className='tooltip'>
                        <img src={"../../assets/images/hdi.png"} alt={'hdi icon'} />
                        <span className="pop_value"> <span>HDI index:</span> 52</span>
                        <div className="right">
                            <p  className='tooltipText'>
                                The Human Development Index (HDI) is a statistic composite
                                index of <span>life expectancy</span>, <span>education</span>, and <span>per capita
                                income</span> indicators, which are used to rank
                                countries into four tiers of human development
                            </p>
                            <i> </i>
                        </div>
                    </li>
                </ul>
                </>
                    }
           </>
        )
    }
}