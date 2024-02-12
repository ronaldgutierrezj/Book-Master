import React , {useState} from "react";
import { useLocation } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import MyShelf from "../components/MyShelfAvailable";
import UserRecommendationListing from "../components/UserRecommendationListing";
import { jwtDecode } from "jwt-decode";


const UserDashboard = () => {
  const location = useLocation();
  const token = localStorage.getItem('accessToken')
  const decoded = jwtDecode(token)
 
  const userId = decoded.sub; 

  return (
    <div className="container-fluid">
      <h1>My Library Dashboard</h1>
      <div className="row">
        <div className="col-md-2">
          <SideNavBar userId={userId}/>
          <br></br>
          {/* My Profile*/}
        </div>
        <div className="col-md-10">
          <MyShelf />
        </div>
        <div className="col-md-10">
          <UserRecommendationListing userId={userId}/>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
