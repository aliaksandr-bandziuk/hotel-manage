'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const defaultFormData = {
  name: '',
  email: '',
  password: '',
}

const Auth = () => {

  const [formData, setFormData] = useState(defaultFormData)

  const inputStyles = 'border border-gray-300 sm:text-black rounded-lg block w-full p-2.5 focus:outline-none';

  const hendleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();

    try {
      console.log('Form data:', formData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setFormData(defaultFormData);
    }

  };

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Create an account</h1>
          <p>OR</p>
          <span className="inline-flex">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>

        <form
          className='space-y-4 md:space-y-6'
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className={inputStyles}
            value={formData.name}
            onChange={hendleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            className={inputStyles}
            value={formData.email}
            onChange={hendleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            className={inputStyles}
            value={formData.password}
            onChange={hendleInputChange}
          />
          <button
            type="submit"
            className="bg-tertiary-dark focus:ontline-none font-medium text-sm px-5 text-white w-full py-2.5 text-center rounded-lg"
          >
            Sign up
          </button>
        </form>

        <button
          className="text-blue-700 underline"
        >Login</button>
      </div>
    </section>
  )
}

export default Auth