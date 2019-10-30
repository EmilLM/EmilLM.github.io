import React from 'react';

export default class Modal extends React.Component {
    state = {
        name: '',
        pass: '',
        mail: '',
        option: '',
        countries: '',
        message: ''

    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.pass]: e.target.value,
            [e.target.mail]: e.target.value,
            [e.target.message]: e.target.value
        });
    };
    render () {
        return (
            <div className={'modal ldt-zoom-in'}>
                <header className='modal_header ldt-slide-top-in'>
                    <h3 className='ldt-slide-bottom-in'>Contact/Survey Form</h3>
                </header>
                <main className='ldt-fade-in'>
                    <form className={'contactForm'}>
                        <div className={'inputs'}>
                            <div className="input-container">
                                <i className="fa fa-user icon"> </i>
                                <input autoComplete={'off'} type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder={'Name'} required/>
                            </div>
                            <div className="input-container">
                                <i className="fa fa-envelope icon"> </i>
                                <input type='email' name='mail' value={this.state.mail} onChange={this.handleChange} placeholder={'Email'} />
                            </div>
                            <div className="input-container">
                                <i className="fa fa-unlock icon"> </i>
                                <input type='password' name='pass' value={this.state.pass} onChange={this.handleChange} placeholder={'Password'} required/>
                            </div>
                        </div>
                        {/*Tooltip about how the name sucks*/}
                        <div className={'survey_radio'}>
                            <p>Opinion about CountryInfo!</p>
                            <label htmlFor="like">Like
                                 <input type="radio" name='opinion' id='like' value='Like' checked/>
                            </label>
                            <label htmlFor="dislike">Dislike
                                 <input type="radio" name='opinion' id='dislike' value='Dislike'/>
                            </label>
                        </div>
                        <div className={'survey_checkbox'}>
                            <label htmlFor="design">Design
                                <input type="checkbox" id='design' />
                            </label>
                            <label htmlFor="function">Functionality
                                 <input type="checkbox" name='functionality' value='functionality' id='function'/>
                            </label>
                            <label htmlFor="appName">Name
                                <input type="checkbox" name='appName' value='appName' id='appName' checked/>
                            </label>
                        </div>
                        <div className={'select_form'}>
                            <select value={this.state.option}>Subject
                                <option value='Feedback'>Feedback</option>
                                <option value='Question'>Question</option>
                                <option value='Other'>Other</option>
                            </select>
                            <select value={this.state.countries}>
                                <option value="Romania">Romania</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>
                        <textarea name='message' value={this.state.message} onChange={this.handleChange} maxLength={'200'} placeholder={'Message'}/>
                        <button type={'submit'} className={'btn'}>Submit</button>

                        {/*Pictures in input + check icon as validation*/}
                        {/*Thank you picture after submit*/}

                    </form>
                </main>
                <footer className='ldt-slide-bottom-in'>
                    <a className='ldt-slide-left-in' href={'https://github.com/EmilLM/CountryInfo-'} target={'_blank'}><span id='gh'>  </span></a>
                    {/*<a className='ldt-slide-bottom-in' href={`mailto:luchianemil@gmail.com`} target={'_blank'}><span id='gmail'> Gmail </span></a>*/}
                    <a className='ldt-slide-right-in' href='https://www.linkedin.com/in/emil-luchian-9933b198/' target={'_blank'}><span id='lin'> </span></a>
                </footer>
            </div>
        )
    }
}