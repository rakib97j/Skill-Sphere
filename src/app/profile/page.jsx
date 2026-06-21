import React from 'react';
import Profile from '../Components/Profile';
import { auth } from "@/lib/auth-server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "My profile",
  description: "User profile",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png?utm_source=chatgpt.com",
  },
};

const MyProfilePage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    
    if (!session) {
        redirect("/login");
    }

    return (
        <div>
            <Profile session={session}/>
        </div>
    );
};

export default MyProfilePage;