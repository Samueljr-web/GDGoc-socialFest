import { useNavigate } from "react-router-dom";
import { submissionData } from "../../pages/dashboard/data";

function Submission() {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/submissions");
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-4 gap-4 bg-gray-200 p-4 rounded-t-lg">
            <h2 className="text-lg font-semibold">Submission Id</h2>
            <h2 className="text-lg font-semibold">Date</h2>
            <h2 className="text-lg font-semibold">Status</h2>
            <h2 className="text-lg font-semibold">Actions</h2>
          </div>
          {submissionData.map((item) => (
            <div
              key={item.submissionId}
              className="grid grid-cols-4 gap-4 bg-white p-4 border-b border-gray-200"
            >
              <h2>#{item.submissionId}</h2>
              <h2>{item.date}</h2>
              <h2>{item.status}</h2>
              <button className="p-2 w-fit text-white rounded-lg bg-[#3AAE9F]">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Submission;
