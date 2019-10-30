import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./HeaderClasses/Header.jsx";
import MenuLogo from "./HeaderClasses/MenuLogo.jsx";
import Container from "./AppContent/Container.jsx";
import FormBody from "./ContactForm/FormBody.jsx";

document.addEventListener('DOMContentLoaded', ()=>{


class FormMain extends React.Component {
    render() {
        return (
            <>
                <Header>
                    <MenuLogo/>
                </Header>
                <Container>
                    <FormBody/>
                </Container>
            </>
        )
    }
}

    ReactDOM.render(
        <FormMain />,
        document.getElementById('contactForm')
    );
});