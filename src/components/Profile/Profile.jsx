import "./Profile.css";
import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ProfileForm from "../ProfileForm/ProfileForm";

function Profile() {
  return (
    <>
      <Header modification="header_client">
        <Navigation />
      </Header>
      <ProfileForm />
    </>
  );
}

export default Profile;
