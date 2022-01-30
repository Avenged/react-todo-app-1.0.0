import { Modal, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const LoadingModal = () => {

    const { show } = useSelector(state => state.modals);

    return (
        <Modal 
            className='modals__modal-loading'
            show={ show }>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Modal>
    );
};
