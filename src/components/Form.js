import React, { useState } from 'react'

const Form = ({setStatusMessage}) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    url: '',
  })

  const onValidate = () => {
    const nameIsValid = /^[a-zA-Z\s]{3,30}$/.test(values.name);
    const phoneIsValid = /^[2-9]{1}\d{9}$/.test(values.phone)
    const emailIsValid = /^\w+@{1}\w+\.{1}\w+$/.test(values.email);
    const urlIsValid = /^(http(s?)?:\/{2})?(www\.)?\w+\.{1}\w+/.test(values.url);

    if(nameIsValid && phoneIsValid && emailIsValid && urlIsValid) setStatusMessage(true)
  }

  return (
    <div className="row">
      <h1 className="text-center">Form Validation</h1>
      <form onSubmit={onValidate}>
        <h3>Name:
        </h3>
        <input type="text"
               value={values.name}
               placeholder='Enter your name'
               onChange={(e) => setValues({ ...values, name: e.target.value })}
               onBlur={() => setStatusMessage(false)}
        />

        <h3>Email:
        </h3>
        <input type="text" placeholder='Enter your email'
               onChange={(e) => setValues({ ...values, email: e.target.value })}
               value={values.email}
               onBlur={() => setStatusMessage(false)}
        />

        <h3>Phone:
        </h3>
        <input type="text"
               placeholder='Enter your phone'
               onChange={(e) => setValues({ ...values, phone: e.target.value })}
               value={values.phone}
               onBlur={() => setStatusMessage(false)}
        />

        <h3>Blog URL:
        </h3>
        <input type="text"
               placeholder='Enter your Blog URL'
               onChange={(e) => setValues({ ...values, url: e.target.value })}
               value={values.url}
               onBlur={() => setStatusMessage(false)}
        />

        <div className="small-6 small-centered text-center columns">
          <button className="button success expand round text-center" type="submit">
            Verify
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
