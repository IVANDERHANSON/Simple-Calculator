import React, { useState } from 'react';
import './Support.css';

function Support() {
  const [showForm, setShowForm] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  
  const isValidEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  
  const isFormValid = firstName && lastName && isValidEmail(email) && topic;

  const generateRandomTicketNumber = () => {
    const randomTicketNumber = Math.floor(Math.random() * 10000) + 1;
    setTicketNumber(randomTicketNumber.toString());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    generateRandomTicketNumber();
    setShowForm(false);
  };
  
  return (
    <div className='wrapper'>
      <div className="support">
        <div className='supportHeader'>Support Ticket Form</div>
        <hr />

        {showForm && (
          <form onSubmit={handleSubmit}>
            <div className='content'>
              <div className="left">
                <label htmlFor="" id='label1'>Name <span>*</span></label>
                <div className='nameInput'>
                  <div>
                    <input type="text" id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    <label htmlFor="" id='label2'>First</label>
                  </div>
                  <div>
                    <input type="text" id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    <label htmlFor="" id='label2'>Last</label>
                  </div>
                </div><br />
                
                <div className='emailInput'>
                  <label htmlFor="" id='label1'>Email <span>*</span></label>
                  <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                </div>

                <label htmlFor="" id='label1'>Topic <span>*</span></label>
                <div className='topicInput'>
                  <div>What can we help you today?</div>
                  <div>
                    <input type="radio" id='generalTopic' value={'General'} checked={topic === 'General'} onChange={() => setTopic('General')} />
                    <label htmlFor="generalTopic">General</label>
                  </div>
                  <div>
                    <input type="radio" id='bugTopic' value={'Bug'} checked={topic === 'Bug'} onChange={() => setTopic('Bug')} />
                    <label htmlFor="bugTopic">Bug</label>
                  </div>
                </div>
              </div>

              <div className="right">
                <label htmlFor="" id='label1'>Description <sup>optional</sup></label>
                <textarea name="" id="" cols={30} rows={14} placeholder='Description Report'></textarea>
              </div>
            </div>

            <div className={isFormValid ? 'valid' : 'invalid'}>
              <button type='submit' disabled={!isFormValid}>SEND</button>
            </div>
          </form>
        )}

        {!showForm && (
          <div className='sent'>
            <div className='sentMessage'>Thank you for sending us your report,<br />we will track the problem now.</div><br />
            <div className='ticketNumber'>ticket number: <span>{ticketNumber}</span></div>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Support;
