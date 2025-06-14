import React, { Suspense, useRef } from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import  Loader  from '../components/Loader';

const Contact = () => {
  const formRef = useRef(null);
  const [form , setForm] = useState({name: '' , email: '' , message: ''})
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setcurrentAnimation] = useState('idle')

  const handleChange = (e) => {
    setForm({...form , [e.target.name]: e.target.value })
  };
  const handleFocus = () => setcurrentAnimation('walk');
  const handleBlur = () => setcurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setcurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Tanishq Tiwari",
        from_email: form.email,
        to_email: 'tanishq.tiwari2812@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false);

      setTimeout(() => {
        setcurrentAnimation('idle')
        setForm({name:'' , email: '' , message: ''});
      }, [3000])
      
    }).catch((error) => {
      setisLoading(false);
      setcurrentAnimation('idle');
      console.log(error);
    })
  }
    return (
      <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text purple-gradient_text font-semibold drop-shadow ">Get In Touch</h1>
          <form className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          >
            <label className="text-white font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Tanishq Tiwari"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />  
            </label>
            <label className="text-white font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="tanishq@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />  
            </label>
            <label className="text-white font-semibold">
              Your Message
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="How can i help you"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />  
            </label>
            <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            >
            {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera ={{
              position: [0 , 0 , 5],
              fov: 75 , 
              near: 0.1,
              far: 1000
            }}>
            <directionalLight intensity={2.8} position={[2 , 1 , 5]}/>
            <ambientLight intensity={0.55}/>
            <Suspense fallback={<Loader/>}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5 , 0.35 , 0]}
                rotation = {[12.625 , -0.6 , 0]}
                scale={[0.52 , 0.52 , 0.52]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    )  
  };
  
  export default Contact;