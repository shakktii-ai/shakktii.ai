import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrbgvjpz");

  if (state.succeeded) {
    return <p className="text-green-500 text-center font-semibold">Thanks for joining!</p>;
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-lg mt-10 mx-auto p-6 bg-white shadow-lg rounded-lg"
      method="POST"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="number" className="block text-gray-700 font-semibold">Phone Number</label>
        <input
          id="number"
          name="number"
          type="tel"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-semibold">Inquiry Message</label>
        <textarea
          id="message"
          name="message"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}


// <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//   <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
  
//   <div className="mb-4">
//     <label htmlFor="email" className="block text-lg font-medium text-gray-700">
//       Email Address
//     </label>
//     <input
//       id="email"
//       type="email" 
//       name="email"
//       className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//     <ValidationError 
//       prefix="Email" 
//       field="email"
//       errors={state.errors}
//       className="text-red-500 text-sm mt-1"
//     />
//   </div>

//   <div className="mb-4">
//     <label htmlFor="message" className="block text-lg font-medium text-gray-700">
//       Message
//     </label>
//     <textarea
//       id="message"
//       name="message"
//       className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//     <ValidationError 
//       prefix="Message" 
//       field="message"
//       errors={state.errors}
//       className="text-red-500 text-sm mt-1"
//     />
//   </div>

//   <div className="flex justify-center">
//     <button 
//       type="submit" 
//       disabled={state.submitting}
//       className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-gray-400"
//     >
//       Submit
//     </button>
//   </div>
// </form>
