import Not from "../assets/404.gif";
function NotFound() {
  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center ">
        <img src={Not} alt="404 GIF" className="" />
        <h2 className="">Page Not Found</h2>
      </div>
    </div>
  );
}

export default NotFound;
