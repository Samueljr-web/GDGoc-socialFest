import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem("userDetails"));
  const onSubmit = (data) => {
    if (userData.email === data.email && userData.password === data.password) {
      toast("Login Successful", {
        type: "success",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast("Invalid Credentials", {
        type: "error",
      });
    }
  };

  return (
    <div className="flex flex-row-reverse items-center justify-center h-screen">
      <div className="bg-[#3BB396] text-white h-[560px] rounded-r-lg w-[300px] flex flex-col items-center justify-center">
        <div>
          <h1 className="float-left text-2xl">GDGoc Socialfest</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 mt-2">
          <h3 className="text-lg">Dont have an account?</h3>
          <Link to="/register">
            <button className="py-2 px-4 border-2 border-white rounded-lg">
              Signup
            </button>
          </Link>
        </div>
      </div>
      <div></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center flex-col justify-center h-[560px] rounded-l-lg border-solid w-[500px] shadow-md"
      >
        <h2 className="text-4xl text-[#50A294] text-center">Welcome Back!</h2>
        <div className="mt-10 space-y-6">
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
