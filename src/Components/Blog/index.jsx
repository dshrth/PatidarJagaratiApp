import React from "react";
import "./index.css";

export default function Blog() {
  return (
    <div className="blogContainer">
      <div>
        <img
          className="blogImage"
          src="https://static8.depositphotos.com/1005669/1005/i/950/depositphotos_10052333-stock-photo-file-server.jpg"
          alt="Web Hoisting"
        />
        <p className="blogContent">
          वेब होस्टिंग का अर्थ (Meaning of Web Hosting in Hindi){" "}
        </p>
        <p className="blogDetails">
          आइये सबसे पहले जानें की होस्टिंग क्या है? वेब होस्टिंग का हिंदी में
          क्या मतलब है?
        </p>
      </div>
      <div>
        <img
          className="blogImage"
          src="https://thumbs.dreamstime.com/b/dallas-texas-united-states-photograph-youtube-logo-computer-screen-youtube-logo-laptop-screen-photograph-116964694.jpg"
          alt=" You tube with laptop"
        />
        <p className="blogContent">YouTube Channel कैसे बनता है?</p>
        <p className="blogDetails">
          यूट्यूब चैनल बनाने के लिए सबसे पहले आपको इंटरनेट का बेसिक ज्ञान होना
          जरुरी है,
        </p>
      </div>
      <div className="blogContebtDetails">
        <div className="blogContebtSubDetails">
          <p className="blogContebtDetailsItem">
            {" "}
            हिन्दी या हिंदी? इस शब्द को लिखने का सही तरीका क्या है?
          </p>
          <hr />
          <img
            className="blogContentDetailsImage"
            src="https://c8.alamy.com/comp/2CKXPNT/passport-photo-of-cute-and-well-dressed-caucasian-man-in-jacket-shirt-or-suit-and-tie-2CKXPNT.jpg"
            alt="Blog Details"
          />
        </div>
        <div className="blogContebtSubDetails">
          <p className="blogContebtDetailsItem">
            ब्लॉग क्या होता है? ब्लॉग व ब्लॉग्गिंग के बारे में विस्तृत जानकारी।
          </p>
          <hr />
          <img
            className="blogContentDetailsImage"
            src="https://us.123rf.com/450wm/stylephotographs/stylephotographs2004/stylephotographs200401182/144946442-frontal-portrait-of-a-serious-looking-businessman.jpg?ver=6"
            alt="Blog Details"
          />
        </div>
        <div className="blogContebtSubDetails">
          <p className="blogContebtDetailsItem">
            वेब होस्टिंग क्या है? होस्टिंग कितने प्रकार की होती है? होस्टिंग की
            सम्पूर्ण जानकारी
          </p>
          <hr />
          <img
            className="blogContentDetailsImage"
            src="https://t3.ftcdn.net/jpg/03/31/63/82/360_F_331638217_BsSy1TcziNymxOBAMGO6Zrc4hge5yQWz.jpg"
            alt="Blog Details"
          />
        </div>
        <div className="blogContebtSubDetails">
          <p className="blogContebtDetailsItem">
            YouTube चैनल कैसे बनाएं और पैसा कैसे कमाएं?{" "}
          </p>
          <hr />
          <img
            className="blogContentDetailsImage"
            src="https://media.istockphoto.com/id/504854859/photo/passport-photo.jpg?s=612x612&w=0&k=20&c=NFKN7d-VaOS3BwdKcX8l50ehKrH8KkyZZkAU3YX6S_w="
            alt="Blog Details"
          />
        </div>
      </div>
    </div>
  );
}
