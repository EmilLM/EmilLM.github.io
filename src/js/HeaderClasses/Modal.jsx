import React from 'react';

export default class Modal extends React.Component {
    render () {
        return (
            <div id="id01" className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content w3-card-4">
                    <header className="w3-container w3-teal">
                        <span onClick="document.getElementById('id01').style.display='none'"
                        className="w3-button w3-large w3-display-topright">&times;</span>
                        <h2>Modal Header</h2>
                    </header>
                    <div className="w3-container">
                        <p>Some text..</p>
                        <p>Some text..</p>
                    </div>
                    <footer className="w3-container w3-teal">
                        <p>Modal Footer</p>
                    </footer>
                </div>
            </div>

        )
    }
}