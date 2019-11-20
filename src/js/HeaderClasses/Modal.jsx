import React from 'react';

export default class Modal extends React.Component {
    handleClick = () => {
        if (typeof this.props.onModalX ==='function') {
            this.props.onModalX();
        }
    };
    handleAnimation = () => {
        if (typeof this.props.onAnimation === 'function') {
            this.props.onAnimation();
        }
    };
    render () {
        return (
            <div className='gray_bg'>
                <div className={'modal ' + this.props.onClass} onAnimationEnd={this.handleAnimation}>
                    <header className='modal_header'>
                        <h3>CountryINFO!</h3>
                        <div className='close-container' onClick={this.handleClick}>
                            <div className="leftRight"> </div>
                            <div className="rightLeft"> </div>
                        </div>
                    </header>
                    <main>
                        <article>
                            <h5>Scope</h5>
                            <p>
                                CountryInfo! is web app that presents various social-economic indicators about a country.
                                It offers a small window into the current and future well-being of its citizens.
                            </p>
                            <p>
                                It combines both my interest in programming; in nice and responsive design as well
                                as my passion for international relations, developed in React. This project is about practicing my current skills.
                            </p>

                        </article>
                        <article>
                            <h5>Sources</h5>
                            <p> Data is valid only for 2018.</p>
                            <div className='doc_lists'>
                                <ul> Code:
                                    <li><a href='https://www.w3schools.com/html/default.asp'>HTML5/CSS3</a></li>
                                    <li><a href='https://www.w3schools.com/js/js_es6.asp'>JS ES6</a></li>
                                    <li><a href='https://reactjs.org/'>React</a></li>
                                </ul>
                                <ul> APIs:
                                    <li><a href='http://ip-api.com/'>IP-API</a></li>
                                    <li><a href='https://restcountries.eu/'>Countries</a></li>
                                    <li><a href='https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information'>World Bank</a></li>
                                </ul>
                                <ul> Assets:
                                    <li><a href='https://loading.io/'>Loading.io</a></li>
                                    <li><a href='https://freefrontend.com/'>Free Frontend</a></li>
                                    <li><a href='https://fontawesome.com/'>Font Awesome</a></li>
                                </ul>
                            </div>
                        </article>
                    </main>
                    <footer>
                        <a href={'https://github.com/EmilLM/CountryInfo'} target={'_blank'}><span id='gh'> </span></a>
                        <a href='https://www.linkedin.com/in/emil-luchian-9933b198/' target={'_blank'}><span id='lin'> </span></a>
                    </footer>
                </div>
            </div>
        )
    }
}