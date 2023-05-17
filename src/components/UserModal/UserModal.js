import React, { useState } from 'react';
import { GeneralModal, ContactModal, AddressModal } from '.';


const UserModal = (props) => {

  const renderModal = (exp) => {
    switch (exp) {
      case 1:
        return <GeneralModal
          show={props.show}
          handleClose={props.handleClose}
          step={props.step}
          setStep={props.setStep}
          formData={props.formData}
          setFormData={props.setFormData}
          handleChange={props.handleChange}
        />
      case 2:
        return <ContactModal
          show={props.show}
          handleClose={props.handleClose}
          step={props.step}
          setStep={props.setStep}
          formData={props.formData}
          setFormData={props.setFormData}
          handleChange={props.handleChange}
        />
      case 3:
        return <AddressModal
          show={props.show}
          handleClose={props.handleClose}
          step={props.step}
          setStep={props.setStep}
          formData={props.formData}
          setFormData={props.setFormData}
          handleChange={props.handleChange}
        />
    }
  }

  return renderModal(props.step);
}

export default UserModal