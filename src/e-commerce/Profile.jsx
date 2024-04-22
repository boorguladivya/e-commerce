import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Styles from './app.module.css';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state && location.state.userData;

  const handleProceedToOrder = () => {
    alert("Order placed successfully!");
    navigate('/');
  };

  return (
    <div>
      <center>
        <h2>Profile Page</h2>
        {userData ? (
          <div className={Styles.profileContainer}>
            <form className={Styles.profile}>
              <span className={Styles.userName}>UserName:</span><span>{userData.userName}</span><br/><br/>
              <span className={Styles.email}>Email:</span> <span>{userData.email}</span><br/><br/>
              <span className={Styles.phoneNumber}>Phone Number:</span> <span>{userData.phoneNumber}</span><br/><br/>
              <span className={Styles.add}>Delivery Address:</span> <span>{userData.deliveryAddress}</span>
              <br/><br/>
              <button type="button" className={Styles.btn1} onClick={handleProceedToOrder}>Proceed to Order</button>
            </form>
          </div>
        ) : (
          <p>No user data found</p>
        )}
      </center>
    </div>
  );
};

export default Profile;
