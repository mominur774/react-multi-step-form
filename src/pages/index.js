import React, { useContext, useEffect, useState } from 'react';
import { UserModal } from '@/components/UserModal';
import GlobalContext from '@/context/GlobalContext';

const Home = () => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const gContext = useContext(GlobalContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleClose = () => {
    setShow(false);
    setStep(1);
    setFormData({});
  }

  const handleEdit = (id) => {
    setShow(true);
    setStep(1);
    gContext.users.filter(user => {
      if (user.id === id) {
        setFormData(user)
      }
    })
  }

  const handleDelete = (id) => {
    let users = []
    gContext.users.filter(user => {
      if (user.id != id) {
        users.push(user)
      }
    })
    localStorage.setItem('users', JSON.stringify(users))
    gContext.getUsers();
  }

  return (
    <>
      <div className="container my-3">
        <button onClick={() => setShow(true)} className="btn btn-primary mb-4">
          Create User
        </button>
        <hr />
        {gContext?.users?.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <>
                {gContext?.users?.length > 0 && gContext?.users?.map((user, i) => (
                  <tr key={i}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.city}, {user.state}-{user.postal_code}</td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button onClick={() => handleEdit(user.id)} className='btn btn-primary btn-sm'>Edit</button>
                        <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm'>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        ) : (
          <h5 className='text-center'>No users found. Add some</h5>
        )}

      </div>
      <UserModal
        show={show}
        formData={formData}
        step={step}
        setFormData={setFormData}
        setStep={setStep}
        handleClose={handleClose}
        handleChange={handleChange}
      />
    </>
  )
}

export default Home;