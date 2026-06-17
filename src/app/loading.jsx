import { Spinner } from "@heroui/react";


const loading = () => {
    return (
      <div className="fixed inset-0 w-full h-screen flex flex-col justify-center items-center bg-background z-50">
        <div className="flex flex-col items-center gap-6">
         

          {/* Hero UI Spinner */}
          <div className="flex flex-col items-center gap-2">
            <Spinner
              size="xl"
              color=""
              className={{
                circle1: "border-b-success",
                circle2: "border-b-success",
              }}
            />
            <p className="text-2xl font-black text-primary tracking-wider uppercase pt-2 animate-pulse">
              Loading Skill Sphere...
            </p>
          </div>
        </div>
      </div>
    );
};

export default loading;