import React, { use, useState } from 'react';

import { Link, Navigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { updateCurrentUser } from 'firebase/auth';

const Registration = () => {
     const {createUser, setUser} = use(AuthContext);
     const [nameError, setNameError] = useState('');
  

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        //console.log(email, password);

        if(name.length < 5){
            setNameError('Name Should be more then 5 character');
            return;
        }
        else{
            setNameError('')
        };

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
             updateCurrentUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Navigate("/");
          })
         .catch((error) => {
            console.log(error);
            setUser(result.user);
          });
            
        })
        .catch(error => {
            console.log(error.message);
            
        });
    }
        
    
   
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
             <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Registration</button>

          <p>Already have an account ? Please <Link className='text-blue-400' to='/login'>Sign in</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Registration;