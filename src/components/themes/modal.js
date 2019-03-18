import React from 'react'
import styled from 'styled-components';
import ReactModal from 'react-modal';

class Modal extends React.Component {

    componentDidMount = () => {
        ReactModal.setAppElement(document.getElementById('app'));
    };

    render() {
        return (
            <Button>
                <ReactModal 
                isOpen={true}
                shouldCloseOnEsc={true}
                ariaHideApp={true}>
                stuff
                </ReactModal>
            </Button>
        );
    }
}

export default Modal;

const Button = styled.div`
display: block;
background-color: green;
padding: 1rem;
`