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
import CountryModuleFromSearch from "./AppContent/CountryModuleFromSearch.jsx";
import CountryDetailsFromSearch from "./AppContent/CountryDetailsFromSearch.jsx";
import OtherIndicatorsFromSearch from "./AppContent/OtherIndicatorsFromSearch.jsx";
import Modal from "./HeaderClasses/Modal.jsx";



export default class Home extends React.Component {
    state = {
      isModuleVisible: false,
      className: 'ldt-zoom-in',
      isSearchClicked : false,
      countryModuleClassName: 'ldt-zoom-in',
      dataByIP: false,
      dataByCode: false,
      countrySearch: false,
      countryCode: false,
      ipCountry : false,
      errorStatus: false,
      modal: false,
      modalClass: 'ldt-zoom-in'
    };
    //Add country click--> display search module
    displaySearchModule = () => {
      this.setState( {
          isModuleVisible: true,
          className: 'ldt-zoom-in'
      })
    };
    closeSearch = () => {
        this.setState({
            className: 'ldt-zoom-out',
        });
    };
    handleAnimation = () => {
        if (this.state.className === 'ldt-zoom-out') {
            this.setState({
                isModuleVisible: false
            })
        }
    };
    //Events to display country module by search + close animations
    displayCountryModule = () => {
        this.setState({
          isSearchClicked: true,
          countryModuleClassName: 'ldt-zoom-in'

        })
    };
    handleSearchClick = () => {
        this.setState( {
            countryModuleClassName: 'ldt-zoom-out'
        })
    };
    searchAnimation = () => {
        if (this.state.countryModuleClassName === 'ldt-zoom-out') {
            this.setState({
                isSearchClicked: false
            })
        }
    };
    // removes invalid input warning after every search
    handleErrorCheck = () => {
        if (this.state.errorStatus) {
            this.setState({
               errorStatus: !this.state.errorStatus
            })
        }
    };
    // displays About modal
    modalToggle= () => {
        this.setState({
            modal: !this.state.modal,
            modalClass: 'ldt-zoom-in'

        })
    };
    modalClose = () => {
        this.setState({
            modalClass: 'ldt-zoom-out'
        })
    };
    modalCloseAnimation = () => {
        if (this.state.modalClass === 'ldt-zoom-out') {
            this.setState({
                modal: !this.state.modal
            })
        }
    };


    //API request by search
    sendCountryName = value => {
        fetch(`https://restcountries.eu/rest/v2/name/` + value +`?fullText=true`).then(resp => {
            return resp.json();
        }).then(resp => {
            this.setState({
                countrySearch: resp,
                countryCode: resp[0].alpha3Code,
            })

            // }, () => {
            //     let {countryCode} =this.state;
            //     console.log(countryCode);
            //     const hdiIndicator = 103706;
            //     const hdiRank = 146206;
            //     const gdpIndicator = 143306; //Gross domestic product (GDP), total (2011 PPP $ billions)
            //     const popIndicator = 44206;
            //     const giniIndicator = 67106;
            //     const unemploymentIndicator = 140606;
            //     const emissionsIndicator = 27706;
            //     const internetUsers = 43606;
            //     const medianAge = 47906;
            //
            //     fetch(`https://cors-anywhere.herokuapp.com/http://ec2-54-174-131-205.compute-1.amazonaws.com/API/HDRO_API.php/country_code=`
            //         + countryCode +`/indicator_id=`+internetUsers+`,`+hdiRank+`,`+popIndicator+`/year=2017/structure=ciy`).then(resp => {
            //         return resp.json();
            //     }).then(resp => {
            //         console.log(resp);
            //         this.setState({
            //             dataByCode: resp
            //         })
            //     }).catch( err => {
            //         console.log('Error2!', err);
            //     });
            // });
        }).catch( err => {
            console.log('Error!', err);
            this.setState({
                errorStatus: err
            })
        });
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
                        // countryCode: resp[0].alpha3Code
                    });
                    // let {countryCode} =this.state;
                    // fetch(`https://cors-anywhere.herokuapp.com/http://ec2-54-174-131-205.compute-1.amazonaws.com/API/HDRO_API.php/country_code=`
                    //     + countryCode +`/indicator_id=47906/year=2014,2015,2016,2017`).then(resp => {
                    //     return resp.json();
                    // }).then(resp => {
                    //     console.log(resp);
                    //     this.setState({
                    //         dataByCode: resp
                    //     })
                    // })
                })
            });
        });
    }
    render () {
        return (
            <>
                <Header>
                    <MenuLogo onModalToggle={this.modalToggle}/>
                    <AddCountry  onToggle={this.displaySearchModule} moduleState={this.state.isModuleVisible}  />
                </Header>
                <Container>
                    {/*Conditional rendering for Search module*/}
                    {this.state.isModuleVisible && <SearchModule moduleState={this.state.isModuleVisible} onClass={this.state.className} onAnimation={this.handleAnimation}
                                                                 onX={this.closeSearch} onSend={this.sendCountryName} onSearch={this.displayCountryModule}
                                                                 countrySearch={this.state.countrySearch} onError={this.state.errorStatus} onErrorChange={this.handleErrorCheck}/>}
                    <CountryModule dataIP={this.state.dataByIP}>
                        <CountryDetails  dataIP={this.state.dataByIP} dataCode={this.state.dataByCode}  ipCountry={this.state.ipCountry} />
                        <OtherIndicators dataIP={this.state.dataByIP} dataCode={this.state.dataByCode} ipCountry={this.state.ipCountry} />
                    </CountryModule>

                    {/*Conditional rendering by search for countries*/}
                    <>
                        {this.state.countrySearch === false
                            ?
                            null
                            :
                            <>
                                {this.state.isSearchClicked && <CountryModuleFromSearch onClose={this.handleSearchClick} onCountryAnimation={this.searchAnimation}
                                                                              countryModuleState={this.state.isSearchClicked} countryModuleClassName={this.state.countryModuleClassName}>
                                    <CountryDetailsFromSearch countrySearch={this.state.countrySearch}/>
                                    <OtherIndicatorsFromSearch countrySearch={this.state.countrySearch}/>
                                </CountryModuleFromSearch>}
                            </>
                        }
                    </>
                    {/*Conditional rendering for About modal*/}
                    {this.state.modal && <Modal onModalX={this.modalClose} status={this.state.modal} onClass={this.state.modalClass} onAnimation={this.modalCloseAnimation} />}
                </Container>
            </>
        )
    }
}

// ReactDOM.render(
//     <Home />,
//     document.getElementById('app')
// );