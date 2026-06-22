import RegisterForm from '@/app/Components/Auth/RegisterForm';



export const metadata = {
  title: "Register",
  description: "Log in to Skill-sphere and get full access",

  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
  },
};


const RegisterPage = () => {
    return (
        <div className='flex justify-center items-center'>
            
            <RegisterForm/>
        </div>
    );
};

export default RegisterPage;