import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

const Dashboard = () => {
  return (
    <>
    {/* <Sidebar active="dashboard" /> */}
    <Header />
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar + Main Content Container */}
      <div className="flex">
        {/* Sidebar */}

        {/* Main Content */}
        <div className=" flex-1 p-8">
          {/* Header */}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">Total Rentals</p>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-500">
                <span>↑ 12%</span> from last month
              </div>
            </div>
            {/* Add more stat cards */}
          </div>

          {/* Upcoming Bookings */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Upcoming Bookings</h2>
              <button className="text-blue-500 hover:text-blue-600 font-medium">
                View All →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-3">Vehicle</th>
                    <th className="pb-3">Pickup Date</th>
                    <th className="pb-3">Return Date</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((item) => (
                    <tr key={item} className="border-b last:border-b-0">
                      <td className="py-4">
                        <div className="flex items-center">
                          <div className="w-16 h-10 bg-gray-200 rounded-lg mr-4"></div>
                          <div>
                            <p className="font-medium">Mercedes S-Class</p>
                            <p className="text-sm text-gray-500">
                              Luxury Sedan
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">15 Oct 2023</td>
                      <td className="py-4">20 Oct 2023</td>
                      <td className="py-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          Confirmed
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="text-blue-500 hover:text-blue-600">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions + Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-6 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
                  <svg
                    className="w-8 h-8 text-blue-500 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  New Booking
                </button>
                <button className="p-6 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
                  <svg
                    className="w-8 h-8 text-blue-500 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Manage Bookings
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Booking confirmed</p>
                      <p className="text-sm text-gray-500">
                        Mercedes S-Class • 15 Oct - 20 Oct
                      </p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
