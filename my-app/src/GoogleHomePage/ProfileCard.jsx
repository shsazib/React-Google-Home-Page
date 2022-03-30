import React from 'react';
import Me from '../images/me.jpeg'
import { MdPersonAddAlt } from "react-icons/md";

export default function ProfileCard() {
  return (
      <>
        <div className="profile-cards">
            <div className="profile-card-top">
                <img src={Me} alt=""></img>
                <h3>SH Sazib Bhuiyan</h3>
                <p>shsazibbhuiyan892939@gmail.com</p>
                <button>Manage your Google Account</button>
            </div>
            <div className="profile-card-midel">
              <a href="www.google.com"><MdPersonAddAlt className="profile-card-icon"/>Add another account
              </a>
            </div>
            <div className="profile-card-midel-second">
              <bottom className="profile-card-midel-bottom">Sign out</bottom>
            </div>
            <div className="profile-card-footer">
              <button className="profile-card-footer-button">Privacy Policy</button>
              <button className="profile-card-footer-button">Terms of Service</button>
            </div>
        </div>
      </>
  );
}
