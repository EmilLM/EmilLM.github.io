import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderClasses/Header.jsx'
import MenuLogo from "./HeaderClasses/MenuLogo.jsx";
import AddCountry from "./HeaderClasses/AddCountry.jsx";
import Container from './AppContent/Container.jsx';
import SearchModule from './AppContent/SearchModule.jsx';
import CountryModule from './AppContent/CountryModule.jsx';
import CountryDetails from './AppContent/CountryDetails.jsx';
import OtherIndicators from './AppContent/OtherIndicators.jsx';


document.addEventListener("DOMContentLoaded",function () {

class App extends React.Component {
    state = {
      isAddCountryVisible: false,
      countryName: '',
      dataByIP: false,
      dataByCode: false,
      countryCode: false,
      ipCountry : false,
        dataBySearch: false,
        dataCountry: false,
        dataCurrency: false,
        dataLang: false
    };
    toggleAddCountry = () => {
      this.setState(prevState => {
          return {isAddCountryVisible: !prevState.isAddCountryVisible}
      })
    };
    sendCountryName = value => {
        fetch(`https://restcountries.eu/rest/v2/name/` + value +`?fullText=true`).then(resp => {
            return resp.json();
        }).then(resp => {
            this.setState({
                countryCode: resp[0].alpha3Code,
                dataBySearch: resp[0].flag,
                dataCountry: resp[0].name,
                dataCurrency: resp[0].currencies[0].code,
                dataLang: resp[0].languages[0].name

            }, () => {
                let {countryCode} =this.state;
                console.log(countryCode);
                const hdiIndicator = 103706;
                const hdiRank = 146206;
                const gdpIndicator = 143306; //Gross domestic product (GDP), total (2011 PPP $ billions)
                const popIndicator = 44206;
                const giniIndicator = 67106;
                const unemploymentIndicator = 140606;
                const emissionsIndicator = 27706;
                const internetUsers = 43606;
                const medianAge = 47906;

                fetch(`https://cors-anywhere.herokuapp.com/http://ec2-54-174-131-205.compute-1.amazonaws.com/API/HDRO_API.php/country_code=`
                    + countryCode +`/indicator_id=`+internetUsers+`,`+hdiRank+`,`+popIndicator+`/year=2017/structure=ciy`).then(resp => {
                    return resp.json();
                }).then(resp => {
                    console.log(resp);
                    this.setState({
                        dataByCode: resp
                    })
                })
            });
        })
    };
    componentDidMount() {
        //Fetch country from IP API
        fetch(`http://ip-api.com/json/`,
            {
                method: 'GET',
            }).then( ipResp => {
            return  ipResp.json();
        }).then( ipResp => {
            this.setState({
                ipCountry: ipResp.country
            }, () => {
                let {ipCountry} = this.state;
                fetch(`https://restcountries.eu/rest/v2/name/`+ ipCountry +`?fullText=true`).then(resp=>{
                    return resp.json();
                }).then(resp=>{
                    console.log(resp);
                    this.setState({
                        dataByIP: resp,
                        countryCode: resp[0].alpha3Code
                    });
                    let {countryCode} =this.state;
                    const hdiIndicator = 103706;
                    const hdiRank = 146206;
                    const gdpIndicator = 143306; //Gross domestic product (GDP), total (2011 PPP $ billions)
                    const popIndicator = 44206;
                    const giniIndicator = 67106;
                    const unemploymentIndicator = 140606;
                    const emissionsIndicator = 27706;
                    const internetUsers = 43606;
                    const medianAge = 47906;
                    fetch(`https://cors-anywhere.herokuapp.com/http://ec2-54-174-131-205.compute-1.amazonaws.com/API/HDRO_API.php/country_code=`
                        + countryCode +`/indicator_id=47906/year=2014,2015,2016,2017`).then(resp => {
                        return resp.json();
                    }).then(resp => {
                        console.log(resp);
                        this.setState({
                            dataByCode: resp
                        })
                    })
                })
            });
        });
    }
    render () {
        return (
            <>
                <Header>
                    <MenuLogo/>
                    <AddCountry onToggle={this.toggleAddCountry}/>
                </Header>
                <Container>
                    {this.state.isAddCountryVisible && <SearchModule onSend={this.sendCountryName} />}
                    <CountryModule >
                        <CountryDetails dataLang={this.state.dataLang} dataCurrency={this.state.dataCurrency} dataName={this.state.dataCountry} dataSearch={this.state.dataBySearch} dataIP={this.state.dataByIP} dataCode={this.state.dataByCode} countryCode={this.state.countryCode} ipCountry={this.state.ipCountry} />
                        <OtherIndicators dataIP={this.state.dataByIP} dataCode={this.state.dataByCode} countryCode={this.state.countryCode} ipCountry={this.state.ipCountry}/>
                    </CountryModule>
                </Container>
            </>
        )
    }
}

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});