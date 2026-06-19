import React from 'react';
import Profile from '../Components/Profile';


export const metadata = {
  title: "My profile",
  description: "User profile",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png?utm_source=chatgpt.com",
  },
};


const MyProfilePage = () => {
    return (
        <div>
            <Profile/>
        </div>
    );
};

export default MyProfilePage;