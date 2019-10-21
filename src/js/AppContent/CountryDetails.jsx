import React from 'react';

export default class CountryDetails extends React.Component {

    render() {
        console.log(this.props.dataCode);
        console.log(this.props.dataIP);
        return (
            <>
                {this.props.dataIP === false
                    ?
                <img style={{margin: '8vh auto', width:'9vh', height: 'auto'}} src={'../../assets/images/loading.gif'} alt={'loading icon'}/>
                    :
                <>
                <div className="country_details ">
                    <a href={"https://en.wikipedia.org/wiki/" + this.props.dataName} target="_blank">
                    <img className="flag ldt-power-on" src={this.props.dataSearch} />
                    </a>
                    <div className="currency_country ldt-jump-in">
                        <div className="countryName">{this.props.dataName}</div>
                        <div className="currency">{this.props.dataCurrency}</div>
                        <div className="language">{this.props.dataLang} </div>
                    </div>
                </div>
                <ul className="main_indicators ldt-fall-in">
                    <li className='btn btn-primary tooltip'>
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
                    <li className='btn btn-primary tooltip'>
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
                    <li className='btn btn-primary tooltip'>
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