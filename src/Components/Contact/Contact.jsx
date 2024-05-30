import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "10329710-b97f-495b-8619-295e378ba8f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <dv className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />

        </dv>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <div className="contact-details">
                    <div className="contact-detail">
                    <a href="georgekuttykochumuriyil@gmail.com"><MdEmail className='fa'/></a><p>georgekuttykochumuriyil@gmail.com</p>

                    </div>

                    <div className="contact-detail">
                  <a href="https://www.linkedin.com/in/georgekutty-k-john/"><FaLinkedin className='fa' /></a><p>www.linkedin.com/in/georgekutty-k-john/</p>

                        </div>

                        <div className="contact-detail">
                       <a href="https://github.com/GeorgekuttyKJohn"><FaGithub className='fa' /></a> <p>GEORGEKUTTY K JOHN</p>
                        </div>
                </div>

                
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your Email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'> Submit </button>
                </form>
        </div>
      
    </div>
  )
}

export default Contact