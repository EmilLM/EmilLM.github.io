import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./HeaderClasses/Header.jsx";
import MenuLogo from "./HeaderClasses/MenuLogo.jsx";
import Container from "./AppContent/Container.jsx";
import FormBody from "./ContactForm/FormBody.jsx";
import ModalContainer from "./ContactForm/ModalContainer.jsx";
import FormHeader from "./ContactForm/FormHeader.jsx";
import Footer from "./ContactForm/Footer.jsx";

document.addEventListener('DOMContentLoaded', ()=>{


class FormMain extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
    };
    render() {
        return (
            <>
                <Header>
                    <MenuLogo/>
                </Header>
                <Container>
                    <ModalContainer>
                        <FormHeader/>
                        <FormBody formSubmit={this.handleSubmit}/>
                        <Footer/>
                    </ModalContainer>
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