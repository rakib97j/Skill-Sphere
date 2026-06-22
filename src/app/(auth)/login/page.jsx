import LoginForm from '@/app/Components/Auth/LoginForm';


export const metadata = {
  title: "Log in",
  description: "SingUp to Skill-sphere and get full access",

  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
  },
};

const LogInPage = () => {
    return (
      <>
       
        <div className="flex justify-center items-center  ">
          <LoginForm />
        </div>
      </>
    );
};

export default LogInPage;