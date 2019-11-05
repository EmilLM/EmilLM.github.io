import React from 'react';
import Header from "./HeaderClasses/Header.jsx";
import MenuLogo from "./HeaderClasses/MenuLogo.jsx";
import Container from "./AppContent/Container.jsx";
import FormBody from "./ContactForm/FormBody.jsx";
import ModalContainer from "./ContactForm/ModalContainer.jsx";
import FormHeader from "./ContactForm/FormHeader.jsx";
import Footer from "./ContactForm/Footer.jsx";
import AfterSubmit from "./ContactForm/AfterSubmit.jsx";
import Modal from "./HeaderClasses/Modal.jsx";




export default class FormMain extends React.Component {
    state = {
        isFormValid : false,
        name: '',
        pickedOption: '',
        subject: '',
        modal: false,
        modalClass: 'ldt-zoom-in'
    };
    handleSubmit = (value, picked, option) => {

        this.setState({
            name: value,
            pickedOption: picked,
            subject: option
        })
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
    render() {
        let {name, pickedOption, subject} = this.state;
        return (
            <>
                <Header>
                    <MenuLogo onModalToggle={this.modalToggle}/>
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
                    {this.state.modal && <Modal onModalX={this.modalClose}  onClass={this.state.modalClass} onAnimation={this.modalCloseAnimation} />}
                </Container>
            </>
        )
    }
}

