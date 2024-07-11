import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GoPerson } from 'react-icons/go';
import './contact.css'; 

const Contact = () => {
  const [openContact, setOpenContact] = useState(false);

  const toggleContactPanel = () => {
    setOpenContact(!openContact);
  };

  return (
    <div>
      <GoPerson className={`contact-icon ${openContact ? 'open' : ''}`} onClick={toggleContactPanel} />

      <div className={`contact ${openContact ? 'open' : ''}`}>
        <div className='nomer'>
            <FiPhone className='nomer-icon' />
            <li>+996995331125</li>
        </div>
        <div className='insta'>
            <FaInstagram className='insta-icon' />
            <li>akram0v_l6</li>
        </div>
      </div>
    </div>
  );
}

export default Contact;
