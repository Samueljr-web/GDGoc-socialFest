function Dashboard() {
  const user = JSON.parse(sessionStorage.getItem("userDetails"));
  const firstName = user?.name.split(" ")[0];
  return (
    <>
      <div>Good day {firstName}</div>
    </>
  );
}

export default Dashboard;
