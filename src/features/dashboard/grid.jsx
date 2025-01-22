function Grid() {
  const gridItems = [
    {
      id: 1,
      name: "Total Participants",
      number: 100,
    },
    {
      id: 2,
      name: "Total Submission",
      number: 45,
    },
    {
      id: 3,
      name: "Pending Tasks",
      number: 3,
    },
  ];
  return (
    <div>
      <div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="rounded-lg p-3 bg-[#3AAE9F] text-white w-[250px] h-[120px]"
            >
              <h2 className="text-lg">{item.name}</h2>
              <h4 className="text-3xl">{item.number.toLocaleString()}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grid;
