import React from 'react';

export default class CountryDetails extends React.Component {

    render() {
        let {dataIP, dataCode} = this.props;
        return (
            <>
                {dataIP === false && dataCode === false
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
                        <span className="pop_value"> <span>Pop. growth:</span>  {dataCode?dataCode[1][0].value: ''}%</span>
                        <div className="right">
                            <p className='tooltipText'>
                                The annual population growth of residents of a country.
                            </p>
                            <i> </i>
                        </div>
                    </li>
                    <li className='tooltip'>
                        <img src={"../../assets/images/income.png"} alt={'income icon'} />
                        <span className="income_value"> <span>GNI: </span> {dataCode?dataCode[1][3].value: ''}.000$</span>
                        <div className="right">
                            <p className='tooltipText'>
                                <span>GNI per capita</span> is the total amount of money earned by a nation's citizens and businesses across the world,
                                minus the income of non-citizens residents, converted to  current international $ using  PPP rates.
                            </p>
                            <i> </i>
                        </div>
                    </li>
                    <li className='tooltip'>
                        <img src={"../../assets/images/gdp.png"} alt={'gdp icon'} />
                        <span> <span>GDP:</span> {dataCode?dataCode[1][6].value: ''}${dataCode?dataCode[1][6].scale: ''}</span>
                        <div className="right">
                            <p  className='tooltipText'>
                                Gross domestic products (GDP) is a monetary measure of the <span>market value</span> of all the final
                                <span>goods and services produced in a year</span> in a country. Value is expressed in current $.
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