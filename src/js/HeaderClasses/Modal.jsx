import React from 'react';

export default class Modal extends React.Component {
    render () {
        return (
            <div className='modal ldt-zoom-in' data-status={this.props.status}>
                <header className='modal_header ldt-slide-top-in'>
                    <h3 className='ldt-slide-bottom-in'>Welcome to C<sub><img src={'/assets/images/animIcons/earth_loading.svg'}/></sub>untryInf
                                    <sub><img src={'/assets/images/animIcons/earth_loading.svg'}/></sub>!</h3>
                    <button className='close_button' onClick={this.props.onModalToggle}> X </button>
                </header>
                <main className='ldt-fade-in'>
                    <article className='ldt-slide-left-in'>
                        <h5>Scope</h5>
                        <p>
                            CountryInfo! is web app that presents various socio-economic indicators about a country.
                            It offers a small window into the current and future well-being of its citizens.
                        </p>
                        <p>
                            It combines both my interest in programming; in nice, clean and responsive design as well
                            as my passion for international relations.
                        </p>

                    </article>
                    <article className='ldt-slide-right-in'>
                        <h5>Sources</h5>
                        <div className='doc_lists'>
                            <ul> Code:
                                <li><a>HTML5/CSS3</a></li>
                                <li><a>JS ES6</a></li>
                                <li><a>React</a></li>
                            </ul>
                            <ul> API:
                                <li><a>IP</a></li>
                                <li><a>Countries</a></li>
                                <li><a>HDR</a></li>
                            </ul>
                            <ul> Assets:
                                <li><a>Loading.io</a></li>
                                <li><a>Pixabay</a></li>
                                <li><a>And more</a></li>
                            </ul>
                        </div>
                    </article>
                </main>
                <footer className='ldt-slide-bottom-in'>
                    <a className='ldt-slide-left-in' href={'https://github.com/EmilLM/CountryInfo-'} target={'_blank'}><span id='gh'> </span></a>
                    <a className='ldt-slide-right-in' href='https://www.linkedin.com/in/emil-luchian-9933b198/' target={'_blank'}><span id='lin'> </span></a>
                </footer>
            </div>

        )
    }
}