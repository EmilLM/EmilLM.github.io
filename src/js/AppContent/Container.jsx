import React from 'react';

export default class Container extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className="app_container">
                    {this.props.children}
                </section>
            </main>
        )
    }
}

