import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  // const [page, setPage] = useState(0);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    //button should load for 5sec then redirect to dashboard
    setLoading(true);
    //redirect to dashboard
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    setTimeout(() => {
      setLoading(false);
    }, 500);

    sessionStorage.setItem("userDetails", JSON.stringify(data));

    return toast("Account created successfully", {
      type: "success",
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#3BB396] text-white h-[560px] rounded-l-lg w-[300px] md:flex hidden flex-col items-center justify-center">
        <div>
          <h1 className="float-left text-2xl">GDGoc Socialfest</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 mt-2">
          <h3 className="text-lg">Already have an account?</h3>
          <Link to={"/login"}>
            <button className="py-2 px-4 border-2 border-white rounded-lg">
              Signin
            </button>
          </Link>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center flex-col justify-center h-[560px] rounded-r-lg md:w-[450px] lg:w-[500px] md:shadow-md"
        >
          <h2 className="text-4xl text-[#50A294] text-center">
            Create Account
          </h2>
          <div className="mt-10 space-y-6">
            <div className="flex flex-col space-y-2">
              <input
                className={`${
                  errors.name ? " outline-red-600" : ""
                } bg-[#F4F8F7] p-2 w-[16rem]`}
                type="text"
                name="fullname"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                className={`${
                  errors.email && "outline-red-600"
                } bg-[#F4F8F7] p-2 w-[16rem]`}
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <input
                className={`${
                  errors.password && "outline-red-600"
                } bg-[#F4F8F7] p-2 w-[16rem]`}
                type="password"
                placeholder="*********"
                {...register("password", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="p-2 w-full text-white rounded-lg bg-[#3AAE9F]"
            >
              {loading ? "Loading..." : "Register"}
            </button>
            <div className="text-center md:hidden block mt-2">
              <h3 className="text-sm text-[#50A294]">
                Already have an account?{" "}
                <span>
                  <Link to={"/login"} className="underline">
                    Signin
                  </Link>
                </span>
              </h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
