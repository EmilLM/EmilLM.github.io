import React from 'react';

export default class FormMain extends React.Component {
    state = {
        name: '',
        pass: '',
        inputType: 'password',
        mail: '',
        subject: '',
        countries: '',
        message: '',
        pickedOption: 'like',
        allCountries: false
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.pass]: e.target.value,
            [e.target.mail]: e.target.value,
            [e.target.message]: e.target.value
        });
    };
    handleRadios = picked => {
        this.setState({
            pickedOption: picked.target.value
        })
    };
    handleSubject = select => {
        this.setState({
            subject: select.target.value,
            countries: select.target.value
        })
    };
    handleCountries =  select => {
        this.setState({
            countries: select.target.value
        })
    };
    inputTypeChange = () => {
        if (this.state.inputType === 'password') {
            this.setState({
                inputType: 'text'
            })
        } else if (this.state.inputType === 'text') {
            this.setState( {
                inputType: 'password'
            })
        }
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (typeof this.props.formSubmit ==='function') {
            this.props.formSubmit(this.state.name, this.state.pickedOption, this.state.subject);
        }
    };
    componentDidMount() {
        fetch(`https://restcountries.eu/rest/v2/all`).then(resp => {
            return resp.json();
        }).then(resp =>{
            console.log(resp);
            let allNames= [];
            for (let i = 0; i < resp.length; i++) {
               allNames.push(resp[i].name)
            }
            this.setState({
                allCountries: allNames
            });
        })
    }

    render () {
        let {allCountries} = this.state;
        console.log(allCountries.length);
        return (
            <main className='ldt-fade-in'>
                <form className={'main_form'} onSubmit={this.handleSubmit}>
                    <div className={'contact_form'}>
                        <div className={'inputs'}>

                            <div className="input-container">
                                <i className="fa fa-user icon"> </i>
                                <input autoComplete={'off'} type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder={'Name'} required/>
                                {this.state.name && <i className="check_icon fas fa-check"> </i>}
                            </div>

                            <div className="input-container">
                                <i className="fa fa-envelope icon"> </i>
                                <input type='email' name='mail' value={this.state.mail} onChange={this.handleChange} placeholder={'Email'} />
                                {this.state.mail.includes('@') && <i className="check_icon fas fa-check"> </i>}
                            </div>

                            <div className="input-container">
                                <i className="fa fa-unlock icon"> </i>
                                <input  type={this.state.inputType} name='pass' value={this.state.pass} onChange={this.handleChange} placeholder={'Password'} minLength={8} />
                                {this.state.inputType === 'password' && <i onClick={this.inputTypeChange} className="pass_icon fas fa-eye"> </i>}
                                {this.state.inputType === 'text' && <i onClick={this.inputTypeChange} className="pass_icon fas fa-eye-slash" style={{color: 'darkblue'}}> </i>}
                                {this.state.pass.length > 7 && <i className="check_icon fas fa-check"> </i>}
                            </div>

                        </div>
                        <div className={'select_form' }>
                            <div className={'subject_box'}>
                                <select required name='subject' value={this.state.subject} onChange={this.handleSubject} >
                                    <option value="" disabled >Select subject</option>
                                    <option value='feedback'>Feedback</option>
                                    <option value='question'>Question</option>
                                    <option value='message'>Message</option>
                                </select>
                            </div>
                            <div className={'countries_box'}>
                                <select name='countries' value={this.state.countries} onChange={this.handleCountries}>
                                    <option value={""} disabled>Select country</option>
                                    {allCountries === false
                                        ?
                                        <option value='loading' disabled>Loading</option>
                                        :
                                        allCountries.map( (country, index) => <option key={index} value={country}>{country}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className={'area_box'}>
                            <textarea name='message' value={this.state.message} onChange={this.handleChange} maxLength={'200'} placeholder={'Message'}/>
                        </div>
                    </div>
                    <div className={'survey_form'}>
                        {/*Radio*/}
                        <div className={'checks'}>
                            <div className={'survey_radio'}>
                                <p>Opinion about CountryInfo:</p>
                                <div className={'inputGroup'}>
                                    <input type="radio" name='opinion' id='like' value='like' checked={this.state.pickedOption === 'like'} onChange={this.handleRadios}/>
                                    <label htmlFor="like">Looks good!</label>
                                 </div>
                                <div className={'inputGroup'}>
                                    <input type="radio" name='opinion' id='dislike' value='dislike' checked={this.state.pickedOption === 'dislike'} onChange={this.handleRadios}/>
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
                </form>
            </main>

        )
    }
}