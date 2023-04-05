import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function MatrominalDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  console.log(id);
  const userData = {
    bacImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80 ",
    photoProof:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80 ",
    dateofbirth: " 21/04/1997",
    height: "5.2",
    cast: "जारेरिया",
    color: "गोरा",
    education: "Bachelor of science",
    salary: "80,000/- ",
    job: "Accounts Manager at Lending Paisa in Karol Bagh ",
    address: " एच-4, किसान मार्ग, मधुवन कॉलोनी टोंक फाटक, जयपुर (राजस्थान)",
    contact: "01234567890 ",
    father: "श्री अरविंद पाटीदार ",
    mother: "श्रीमती मधु बेन पाटीदार ",
    fatherjob: "व्यवसाय (ऑटो पार्ट्स और बैटरी)",
    fathersalary: "1,00,000/-",
    brother: "1 छोटा भाई ",
  };

  return (
    <div
      className="bacImageProperty "
      style={{ backgroundImage: `url(${userData.bacImage})` }}
    >
      <div className="MatrominalUserDetailsCart">
        <button className="closeButton" onClick={() => navigate("/matrominal")}>
          X
        </button>

        <div>
          <img
            className="MatrominalUserImage"
            src={`${userData.photoProof}`}
            alt="user"
          />
        </div>
        <div className=" MatrominalUserDetails">
          जन्म की तारीख - {userData.dateofbirth}
          <br />
          ऊंचाई -{userData.height}
          <br />
          गोत्र - {userData.cast}
          <br />
          रंग - {userData.color}
          <br />
          शिक्षा - {userData.education}
          <br />
          आय - {userData.salary}
          <br />
          पेशा - {userData.job}
          <br />
          <span style={{ color: " #CE6B57" }}>
            पता -{userData.address}
            <br />
            संपर्क - {userData.contact}
            <br />
          </span>
        </div>
        <div className=" MatrominalUserFamilyDetails">
          पिता - {userData.father}
          <br />
          माता - {userData.mother}
          <br />
          पेशा - {userData.fatherjob}
          <br />
          आय - {userData.fathersalary}
          <br />
          भाई - {userData.brother}
          <br />
        </div>
      </div>
    </div>
  );
}
