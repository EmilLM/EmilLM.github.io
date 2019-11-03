import React from 'react';

export default class ModalContainer extends React.Component {
    render () {
        return (
            <div className={'modal ldt-zoom-in'}>
                {this.props.children}
            </div>
        )
    }
}