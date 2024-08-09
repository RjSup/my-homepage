import '../pages/Contact.css';
import { useState } from 'react';


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "acc6292c-a3a4-4eb3-97f4-4001fe1dfdc0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (
        <div className='contactdiv'>
            <h1>Contact Me</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <label for="name">Name: </label>
                    <input type="text" name="name" required/>
                    <label for="email">Email: </label>
                    <input type="email" name="email" required/>
                    <label for="message">Message: </label>
                    <textarea name="message" rows={4} cols={200} required></textarea>
                    <button type="submit">Submit Form</button>
                </form>
                <span>{result}</span>

            </div>
        </div>
    )
};

export default Contact;