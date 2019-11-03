import React from 'react';

export default class AfterSubmit extends React.Component {
    render () {
        return (
            <main className='ldt-power-on'>
                <h3>Thank you for your {this.props.selectInput}, {this.props.nameInput}!</h3>
                {this.props.radioInput === 'like' && <p style={{textAlign: 'center'}}>I knew it! It does look good :D</p>}
                {this.props.radioInput === 'dislike' && <p style={{textAlign: 'center'}}>Guess I'll keep working on it. :(</p>}
            </main>
        )
    }
}