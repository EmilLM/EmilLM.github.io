import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./HeaderClasses/Header.jsx";
import MenuLogo from "./HeaderClasses/MenuLogo.jsx";
import Container from "./AppContent/Container.jsx";
import FormBody from "./ContactForm/FormBody.jsx";
import ModalContainer from "./ContactForm/ModalContainer.jsx";
import FormHeader from "./ContactForm/FormHeader.jsx";
import Footer from "./ContactForm/Footer.jsx";
import AfterSubmit from "./ContactForm/AfterSubmit.jsx";

document.addEventListener('DOMContentLoaded', ()=>{


class FormMain extends React.Component {
    state = {
        isFormValid : false,
        name: '',
        pickedOption: '',
        subject: ''
    };
    handleSubmit = (value, picked, option) => {

        this.setState({
            name: value,
            pickedOption: picked,
            subject: option
        })
    };
    render() {
        let {name, pickedOption, subject} = this.state;
        return (
            <>
                <Header>
                    <MenuLogo/>
                </Header>
                <Container>
                    <ModalContainer>
                        <FormHeader/>
                        {Boolean(name) === true && Boolean(pickedOption) === true && Boolean(subject) === true
                            ?
                        <AfterSubmit nameInput={this.state.name} radioInput={this.state.pickedOption} selectInput={this.state.subject}/>
                            :
                        <FormBody formSubmit={this.handleSubmit}/>}
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