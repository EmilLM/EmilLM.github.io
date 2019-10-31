import React from 'react';

export default class FormBody extends React.Component {
    state = {
        name: '',
        pass: '',
        mail: '',
        subject: 'Select subject',
        countries: 'Select country',
        message: '',
        appName: true

    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.pass]: e.target.value,
            [e.target.mail]: e.target.value,
            [e.target.message]: e.target.value,
            [e.target.subject]: e.target.subject,
            [e.target.countries]: e.target.countries,
            [e.target.appName]: false
        });
    };
    render () {
        return (
            <div className={'modal ldt-zoom-in'}>
                <header className='modal_header ldt-slide-top-in'>
                    <h3 className='ldt-slide-bottom-in'>Contact</h3>
                    <h3 className='ldt-slide-bottom-in'>Survey</h3>
                </header>
                <main className='ldt-fade-in'>
                    <form className={'main_form'}>
                        <div className={'contact_form'}>
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
                                {/*    Need an icon for pass*/}
                                </div>

                            </div>
                            <div className={'select_form' }>
                                <div className={'subject_box'}>
                                    <select id={'subject'} name='subject' value={this.state.subject} onChange={this.handleChange}  required>
                                        <option disabled>Select subject</option>
                                        <option value='Feedback'>Feedback</option>
                                        <option value='Question'>Question</option>
                                        <option value='Other'>Other</option>
                                    </select>
                                </div>
                                <div className={'countries_box'}>
                                    <select name='countries' value={this.state.countries} onChange={this.handleChange}>
                                        <option disabled>Select country</option>
                                        <option value="Romania">Romania</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>
                            </div>
                            <div class={'area_box'}>
                                <textarea name='message' value={this.state.message} onChange={this.handleChange} maxLength={'200'} placeholder={'Message'}/>
                            </div>
                        </div>
                        <div className={'survey_form'}>
                            {/*Radio*/}
                            <div className={'checks'}>
                                <div className={'survey_radio'}>
                                    <p>Opinion about CountryInfo!:</p>
                                    <div className={'inputGroup'}>
                                        <input type="radio" name='opinion' id='like' value='Like' checked={this.state.appName} onChange={this.handleChange}/>
                                        <label htmlFor="like">Looks good!</label>
                                     </div>
                                    <div className={'inputGroup'}>
                                        <input type="radio" name='opinion' id='dislike' value='Dislike'/>
                                        <label htmlFor="dislike">Could be better!</label>
                                    </div>
                                </div>
                                {/*Checkboxes*/}
                                <div className={'survey_checkbox'}>
                                    <p>What exactly?</p>
                                    <div className={'inputGroup'}>
                                        <input type="checkbox" id='design' />
                                        <label htmlFor="design">Design</label>
                                    </div>
                                    <div className={'inputGroup'}>
                                        <input type="checkbox" name='functionality' value='functionality' id='function'/>
                                        <label htmlFor="function">Functionality</label>
                                    </div>
                                    <div className={'inputGroup tooltip'}>
                                        <input type="checkbox" name='appName' value={this.state.appName} onChange={this.handleChange} id='appName' />
                                        <label htmlFor="appName">Name</label>
                                        <div className="right">
                                            <p className='tooltipText'>
                                                I know, it's bad. Could use some suggestions.
                                            </p>
                                            <i> </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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