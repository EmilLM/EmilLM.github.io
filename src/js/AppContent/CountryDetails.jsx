import React from 'react';

export default class CountryDetails extends React.Component {

    render() {
        let {dataIP, dataCode} = this.props;
        return (
            <>
                {dataCode === false
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
                        <span className="value"> <span>Pop. growth:</span>  {dataCode[1][0].value}{dataCode[1][0].value?'%':'N/A'}</span>
                        <div className="right top">
                            <p className='tooltipText'>
                                The annual population growth of residents of a country.
                            </p>
                            <i> </i>
                        </div>
                    </li>
                    <li className='tooltip'>
                        <img src={"../../assets/images/income.png"} alt={'income icon'} />
                        <span className="value"> <span>GNI: </span> {dataCode[1][3].value}{dataCode[1][3].value?'.000$':'N/A'}</span>
                        <div className="right top">
                            <p className='tooltipText'>
                                <span>GNI per capita</span> is the total amount of money earned by a nation's citizens and businesses across the world,
                                converted to  current international $ using  PPP rates.
                            </p>
                            <i> </i>
                        </div>
                    </li>
                    <li className='tooltip'>
                        <img src={"../../assets/images/moneyBag.png"} alt={'gdp icon'} />
                        <span className='value'> <span>GDP:</span> {dataCode[1][6].value}{dataCode[1][6].value?'$':'N/A'}  {dataCode[1][6].value?dataCode[1][6].scale:''}</span>
                        <div className="right top">
                            <p  className='tooltipText'>
                                Gross domestic products (GDP) is a monetary measure of the <span>market value</span> of all the final
                                 <span> goods and services produced in a year</span> in a country. Value is expressed in current $.
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