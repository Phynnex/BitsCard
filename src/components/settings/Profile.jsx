import React, { useState } from "react";
import styles from "../../assets/css/settings.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Profile = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <h2 className="mb-3">Setting Profile</h2>

      <div className="d-flex align-items-center gap-5">
        <div className={styles.profilePic}></div>
        <button className="pri-btn">Upload new picture</button>
        <button className="alt-btn">Delete</button>
      </div>

      <div className="my-3">
        <form action="">
          <div className="row">
            <div className="col">
              <label htmlFor="">Username</label>
              <input className={styles.settingsInput} type="text" name="" />
            </div>

            <div className="col">
              <label htmlFor="">Email</label>
              <input className={styles.settingsInput} type="email" name="" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <label htmlFor="">Phone Number</label>
              <PhoneInput
                className={styles.settingsInput}
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                countries={["US", "GB", "NG", "GH", "ZA", "KE"]}
                international
              />
            </div>

            <div className="col">
              <label htmlFor="">Email</label>
              <input
                className={styles.settingsInput}
                type="text"
                name=""
                id=""
                placeholder="Date Of Birth"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <input className="pri-btn" type="submit" value="Save Changes" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
