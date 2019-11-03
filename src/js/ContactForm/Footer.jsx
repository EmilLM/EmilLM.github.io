import React from 'react';

export default class Footer extends React.Component {
    render () {
        return (
            <footer className='ldt-slide-bottom-in'>
                <a className='ldt-slide-left-in' href={'https://github.com/EmilLM/CountryInfo-'} target={'_blank'}><span id='gh'>  </span></a>
                {/*<a className='ldt-slide-bottom-in' href={`mailto:luchianemil@gmail.com`} target={'_blank'}><span id='gmail'> Gmail </span></a>*/}
                <a className='ldt-slide-right-in' href='https://www.linkedin.com/in/emil-luchian-9933b198/' target={'_blank'}><span id='lin'> </span></a>
            </footer>
        )
    }
}