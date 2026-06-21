"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, InputGroup, Label, TextField } from "@heroui/react";

import { Eye, EyeOff, ImageIcon, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";





const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    // password name image email confirmPassword 

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      image: userData.image,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      callbackURL: "/",
    });


    console.log("sing up response " , {data ,error});

    if(error){
      toast.error("Failed to register  "  +  error.message )
    }
    if(data){
      toast.success("Successful register operation")
    }

  }

  return (
    <div>
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
            Create Account
          </h1>

          <p className="text-muted-foreground mt-2">
            Join skill-sphere upgrade your life
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={onSubmit}>
          {/* Name */}
          <TextField isRequired>
            <Label className="text-foreground font-medium mb-2">
              Full Name
            </Label>

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
                <User size={18} className="text-primary" />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="bg-transparent text-foreground placeholder:text-muted-foreground"
              />
            </InputGroup>
          </TextField>

          {/* Image URL */}
          <TextField>
            <Label className="text-foreground font-medium mb-2">
              Profile Image URL
            </Label>

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
                <ImageIcon size={18} className="text-primary" />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="image"
                type="text"
                placeholder="https://example.com/profile.jpg"
                className="bg-transparent text-foreground placeholder:text-muted-foreground"
              />
            </InputGroup>
          </TextField>

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
                placeholder="Enter your valid email address"
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
                placeholder="••••••••"
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

          {/* Confirm Password */}
          <TextField isRequired>
            <Label className="text-foreground font-medium mb-2">
              Confirm Password
            </Label>

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
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="bg-transparent text-foreground placeholder:text-muted-foreground"
              />

              <InputGroup.Suffix>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-muted-foreground hover:text-primary transition flex items-center justify-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
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
            h-12
          "
          >
            Create Account
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="h-px bg-border flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="h-px bg-border flex-1" />
          </div>

          {/* Google */}
          <Button
            variant="secondary"
            className="
						w-full
						bg-secondary
						text-foreground
						border border-border
						rounded-2xl
					"
            onPress={() => toast.error("Google signup coming soon! ")}
          >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </Button>

          {/* Login */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default RegisterForm;
