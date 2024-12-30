'use client'
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [ supportForm, setSupportForm ] = useState({name:'', email: '', message:''})
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setSupportForm({...supportForm, [name]: value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(supportForm.name && supportForm.email && supportForm.message){
      // console.log(supportForm)
      alert(`Thank you for your query. We will update you soon.`)
    }
    else {
      alert(`All fields are required. Please fill them out!`)
    }
  }
  return (
    <div
      className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
      data-wow-delay=".15s"
    >
      <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
        Need Help?
      </h2>
      <p className="mb-12 text-base font-medium text-body-color">
        Get in touch with us for any inquiries or support – we’re just a message away!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={supportForm.name}
                onChange={(e)=>handleChange(e)}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={supportForm.email}
                onChange={(e)=>handleChange(e)}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-8">
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={supportForm.message}
                onChange={(e)=>handleChange(e)}
                rows={5}
                placeholder="Enter your Message"
                className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              ></textarea>
            </div>
          </div>
          <div className="w-full px-4">
            <button className="flex items-center gap-2 rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
              Send <FaPaperPlane/>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm