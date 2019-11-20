import React from 'react';

export default class ModalContainer extends React.Component {
    render () {
        return (
            <div className='modal'>
                {this.props.children}
            </div>
        )
    }
}