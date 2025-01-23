import Not from "../assets/404.gif";
function NotFound() {
  return (
    <div className="">
      <div className="flex flex-col justify-center mt-20 md:h-full  items-center ">
        <img src={Not} alt="404 GIF" className="" />
        <h2 className="">Page Not Found</h2>
      </div>
    </div>
  );
}

export default NotFound;
