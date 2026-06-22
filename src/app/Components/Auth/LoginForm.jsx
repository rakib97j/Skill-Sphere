"use client";

import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
import { Button, Card, InputGroup, Label, TextField } from "@heroui/react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";

const  LoginForm =  () => {


  const  handelGoogleSingIn = async () => {
const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data , "data");
  };







  const [showPassword, setShowPassword] = useState(false);


   const onSubmit = async (e) =>{
     e.preventDefault();
     const formData = new FormData(e.currentTarget);
     const userData = Object.fromEntries(formData.entries());
     console.log(  "form submit withe ", userData);



     const { data, error } = await authClient.signIn.email({
      email: userData.email , 
      password: userData.password ,
      rememberMe: true ,
      callbackURL:"/", 
     })
     console.log("sing in response" , {data , error});

       if (error) {
         toast.error("Failed to Login  " + error.message, {
           position: "top-center",
         });
       }
       if (data) {
         toast.success("login success Welcome back" );
       }

   }

  return (
    <Card
      className="
        my-7
        md:w-lg
				p-8
				shadow-2xl
				rounded-[2.5rem]
				border border-border
				bg-card
				text-card-foreground
				transition-colors duration-300
			"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-foreground">
          Login Account
        </h1>

        <p className="text-muted-foreground mt-2">Welcome to Skill-Sphere</p>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={onSubmit}>
        {/* Email */}
        <TextField isRequired>
          <Label className="text-foreground font-medium mb-2">Email</Label>

          <InputGroup
            fullWidth
            className="
							bg-secondary
							border border-border
							rounded-2xl
							px-3
							focus-within:ring-2
							focus-within:ring-primary/20
						"
          >
            <InputGroup.Prefix>
              <Mail size={18} className="text-primary" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-foreground placeholder:text-muted-foreground"
            />
          </InputGroup>
        </TextField>

        {/* Password */}
        <TextField isRequired>
          <Label className="text-foreground font-medium mb-2">Password</Label>

          <InputGroup
            fullWidth
            className="
              bg-secondary
              border border-border
              rounded-2xl
              px-3
              focus-within:ring-2
              focus-within:ring-primary/20
            "
          >
            <InputGroup.Prefix>
              <Lock size={18} className="text-primary" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              className="bg-transparent text-foreground placeholder:text-muted-foreground"
            />

            <InputGroup.Suffix>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-primary transition flex items-center justify-center"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>

        {/* Submit */}
        <Button
          type="submit"
          className="
						w-full
						bg-primary
						text-primary-foreground
						font-bold
						rounded-2xl
            hover:opacity-80
					"
        >
          Log in
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-border flex-1" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* Google */}
        <Button
          onClick={handelGoogleSingIn}
          variant="secondary"
          className="
						w-full
						bg-secondary
						text-foreground
						border border-border
						rounded-2xl
            hover:opacity-75
					"
          
        >
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </Button>

        {/* Login */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          I Don t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-bold hover:underline"
          >
            Register Now
          </Link>
        </p>
      </form>
    </Card>
  );
}

export default LoginForm;
