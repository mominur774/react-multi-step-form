import GlobalContext from '@/context/GlobalContext';
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const AddressModal = (props) => {
  const gContext = useContext(GlobalContext)

  const handleSubmit = (e, id) => {
    e.preventDefault();
    if (!id) {
      props.formData['id'] = new Date().getTime().toString();
      gContext.setUsers([...gContext.users, props.formData]);
      localStorage.setItem('users', JSON.stringify([...gContext.users, props.formData]));
    } else {
      let users = []
      gContext.users.filter(user => {
        if (user.id != id) {
          users.push(user)
        }
        if (user.id === id) {
          users.push(props.formData)
        }
      })
      localStorage.setItem('users', JSON.stringify(users))
    }
    props.handleClose();
    gContext.getUsers();
    props.setFormData({});
    props.setStep(1);
  }


  useEffect(() => {
    let usrs = localStorage.getItem('users');
    if (usrs) {
      gContext.setUsers(JSON.parse(usrs))
    }
  }, [])

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
        <h4 className='text-center'>Address Details</h4>
        <span className='d-block text-center'>Step {props?.step} of 3</span>
        <div className="separator mx-auto my-3"></div>
        <div className="row mt-4">
          <div className="col-lg-8 mx-auto">
            <form
              onSubmit={
                props.formData.id
                  ? (e) => handleSubmit(e, props.formData.id)
                  : (e) => handleSubmit(e, '')
              }
              action=""
            >
              <div className="form-group mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" onChange={props?.handleChange} defaultValue={props?.formData?.city} name="city" className='form-control' id="city" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="state" className="form-label">State</label>
                <input type="text" onChange={props?.handleChange} defaultValue={props?.formData?.state} name="state" className='form-control' id="state" />
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-group mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" onChange={props?.handleChange} defaultValue={props?.formData?.country} name="country" className='form-control' id="country" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group mb-3">
                    <label htmlFor="postal_code" className="form-label">Postal Code</label>
                    <input type="text" onChange={props?.handleChange} defaultValue={props?.formData?.postal_code} name="postal_code" className='form-control' id="postal_code" />
                  </div>
                </div>
              </div>

              <div className='d-flex justify-content-center align-items-center mt-4 mb-3 gap-3'>
                <button type="button" onClick={() => props?.setStep(props?.step - 1)} className='btn btn-secondary py-1'>Back</button>
                <button type="submit" className='btn btn-primary py-1'>
                  {props.formData.id ? 'Update' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddressModal