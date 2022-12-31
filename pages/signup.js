import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SettingsCellRounded } from '@mui/icons-material';

export default function SignUp() {

   
       
       

        const [firstName, setFirstName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [lastName, setLastName] = useState('');
        const [isCreated, setIsCreated] = useState(false);

        const router = useRouter();
      
        function handleSignin(event) {
            if (!event || !event.target) {
              return;
            }
        
          event.preventDefault();
          
    // if the user submitted
        if (firstName ==='' && email==='' && password==='' && lastName==="") {
        //   // call server to register user
            console.log(`${firstName} ${lastName}  ${email}  ${password}`);
        //   fetch('/register', {console.log('Logging in user...');
          setIsCreated(true);
        } else {
          // Display an error message

          alert('Please enter valid credentials');
          console.error('Invalid email or password');
        
        //     method: 'POST',
            

        }
    }
    
    if (isCreated) {
        router.push('/')

      }

  return (
    <>
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://i.postimg.cc/c4ZgcVg3/9-D97682-B-D6-B6-4087-8-A4-F-136-C17-AF4-D5-F.png?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">Create your Account </h2>
         
          
        </div>

        <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-5">
         <form onSubmit={handleSignin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className='flex items-center justify-between gap-4'>
                
             

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
         First name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
        Last name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="lastName"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
         Email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
           Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
          </div>

<div className="mb-4" >
   
   
          <p className="mt-4 text-gray-500">
            your password must be at least
            
             
            
                </p>
                <ul className='text-gray-500'>
                    <li className="mb-1">
                    - Be 8 to 72 characters long

                    </li>
                    <li className="mb-1">
                   -  Have at least one uppercase letter
                    </li>
                    
                </ul>

                <span className="
                    mt-4 block text-sm text-gray-500">
                       - By clicking Create Account, you agree to the Terms of Use and Privacy Policy.
</span>



               </div>

          <button onClick={ handleSignin}    type="button" className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Sign in
        </button>
        </form>
            

  


        </div>
        </div>
        </div>
    
    
    
    </>
  )
}
