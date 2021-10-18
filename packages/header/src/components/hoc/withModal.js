import { Component } from 'react';
import { PropTypes } from 'prop-types';

const withModal = (ModalBodyComponent) => {
  class ModalWrapper extends Component {
    constructor(props) {
      super(props);
    }
    closeModal() {
      console.log('clean up before closing portal and modal');
      this.props.onClose();
    }
    render() {
      return (
        <>
          <div className="modal fade show d-block" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{this.props.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={this.closeModal.bind(this)}
                  />
                </div>
                <div className="modal-body">
                  <ModalBodyComponent />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={this.closeModal.bind(this)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      );
    }
  }

  ModalWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  return ModalWrapper;
};

export default withModal;
