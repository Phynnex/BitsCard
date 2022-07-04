import React from "react";

const SubmitRequest = () => {
  return (
    <div className="container w-50 mt-5 mb-5">
      <div className="faq-container">
        <h2 className="text-white mb-5">Submit A Request</h2>
        <p>Please review your request below</p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          placeholder="Text your requests here!"
        ></textarea>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your email"
        ></input>
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          style={{margin:'32px 20px 32px 0px', color:'#ffc107'}}
          
        />
        <label className="form-check-label" for="exampleCheck1" style={{marginTop:'28px'}}>
          Receive Newsletters
        </label>

        <button className="pri-btn w-100">Submit</button>
      </div>
    </div>
  );
};

export default SubmitRequest;
