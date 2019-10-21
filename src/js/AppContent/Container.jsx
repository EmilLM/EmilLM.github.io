import React from 'react';

export default class Container extends React.Component {
    render() {
        return (
            <main style={{
                    backgroundImage: "url(" + "../../assets/images/map.png" + ")",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh'
            }}>
                <section className="app_Container">
                    {this.props.children}
                </section>
            </main>
        )
    }
}

