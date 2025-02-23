import React from "react";
import Sidebar from "./Sidebar";

const PageLayout = ({ children, title, subtitle, activePage }) => {
  // const [membername, setMembername] = useState(null);

  // useEffect(() => {
  //   const memberData = JSON.parse(localStorage.getItem("member"));
  //   if (memberData) {
  //     setMembername(memberData);
  //   }
  // }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar activePage={activePage} />

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-500">{subtitle}</p>
          </div>

          {/* Page Content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
