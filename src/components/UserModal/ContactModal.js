import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ContactModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new user
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='text-center'>Contact Details</h4>
        <span className='d-block text-center'>Step {props?.step} of 3</span>
        <div className="separator mx-auto my-3"></div>
        <div className="row mt-4">
          <div className="col-lg-8 mx-auto">
            <form action="">
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" onChange={props?.handleChange} defaultValue={props?.formData?.email} name="email" className='form-control' id="email" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" onChange={props?.handleChange} defaultValue={props?.formData?.phone} name="phone" className='form-control' id="phone" />
              </div>
              <div className='d-flex justify-content-center align-items-center mt-4 mb-3 gap-3'>
                <button type="button" onClick={() => props?.setStep(props?.step - 1)} className='btn btn-secondary py-1'>Back</button>
                <button type="button" onClick={() => props?.setStep(props?.step + 1)} className='btn btn-primary py-1'>Next step</button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ContactModal