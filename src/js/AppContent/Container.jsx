import React from 'react';

export default class Container extends React.Component {
    render() {
        return (
            <main style={{
                    backgroundImage: "url(" + "../../assets/images/map.png" + ")",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '120vh',
                    width: '100vw'
            }}>
                <section className="app_container">
                    {this.props.children}
                </section>
            </main>
        )
    }
}

