import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
   );
   
   const [loading, setLoading] = useState(false);

   const handleChange = (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
   }
   const handleSubmit = (e) => {
     e.preventDefault();
     setLoading(true);
     
     emailjs.send('service_fz0x06h', 
                  'template_ohex19g',
                  {
                    from_name: form.name,
                    to_name: 'Mauriel',
                    from_email: form.email,
                    to_email: 'maurieljng@gmail.com',
                    message: form.message,
                  },
                  'jjmPs6Wr-7AxarcAp')
                  .then(()=>{
                    setLoading(false);
                    alert('Thank you! I will get back to you as soon as possible.');

                    setForm({
                      name: "",
                      email: "",
                      message: ""
                    })
                  }, (error)=> {
                    setLoading(false);
                    console.log(error);
                    alert('Something went wrong');
                  })
    };
    //template_ohex19g
    //service_fz0x06h
    //jjmPs6Wr-7AxarcAp
    
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">

          <p className={styles.sectionSubText}>Feel free to contact me</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8">
              <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Name:</span>
                  <input 
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      className="bg-ternary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
                      border-none font-medium">
                  </input>
              </label>

              <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Email:</span>
                  <input 
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your Email?"
                      className="bg-ternary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
                      border-none font-medium">
                  </input>
              </label>

              <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Message:</span>
                  <textarea 
                      rows="7"  
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please write your Message!"
                      className="bg-ternary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
                      border-none font-medium">
                  </textarea>
              </label>

              <button 
                type="submit"
                className="bg-ternary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary
                rounded-xl">
                   {loading? 'Sending...' : 'Send'}</button>
          </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
