import React from "react";
import ProfileNavigation from "../../components/ProfileNavigation/ProfileNavigation";
import { Divider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Orders from "../Orders/Orders";
import UsersAddresses from "../UsersAdresses/UsersAddresses";
import Favorite from "../Favorite/Favorite";
import UserProfile from "./UserProfile";

const Profile = () => {
  return (
    <div className="lg:flex ">
      <div className="lg:w-[20%]  border-r-gray-500">
        <ProfileNavigation />
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="lg:w-[80%]">
        <Routes>
        <Route path="/" element={<UserProfile/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/address" element={<UsersAddresses/>} />
          <Route path="/favorites" element={<Favorite/>} />
          <Route path="/payments" element={<Orders/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
