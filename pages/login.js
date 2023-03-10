import { useState } from 'react';
import { useRouter } from 'next/router';







export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const router = useRouter();


    function handleSignin(event) {
        if (!event || !event.target) {
          return;
        }
      
        event.preventDefault(); 
      
      
        // Check if the email and password are correct
        if (email === 'test@gmail.com' && password === '@Marcus12') {
          // Log the user in
          
          console.log('Logging in user...');
          setIsLoggedIn(true);
        } else {
          // Display an error message

          alert('Please enter valid credentials');
          console.error('Invalid email or password');
        }
        
      }
      if (isLoggedIn) {
        router.push('/')

      }
      //  else {
      //   router.push('/signup')
      // }


      

return(
  <>
<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://i.postimg.cc/c4ZgcVg3/9-D97682-B-D6-B6-4087-8-A4-F-136-C17-AF4-D5-F.png?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Welcome back</h2>
         
          
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form    className="space-y-6"  method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                 
                    
                
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                    value={email}   
                    onChange={(event) => setEmail(event.target.value)}
                   
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                   
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    
                />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> */}
                    Forgot your password?
                  {/* </a> */}
                </div>
              </div>


        {/* form and other elements go here */}
        <button  onClick={handleSignin} onSubmit={handleSignin}  type="button" className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Sign in
        </button>
      
        </form>
        </div>
        </div>
        </div>
        
      </>
    )
        
  }
 