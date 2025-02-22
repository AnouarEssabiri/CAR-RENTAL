import { UpdateBook } from "../../database/Database";
import useDatabase from "../../hooks/useDatabase";

const RequestTest = () => {
  const { bookings, db } = useDatabase();

  // Function to handle accepting a booking
  const acceptRequest = (id) => {
    UpdateBook(db, id, "accepted")
      .then(() => {
        console.log(`Booking ${id} accepted successfully.`);
        // Optionally, refresh the bookings list or update state
      })
      .catch((error) => {
        console.error("Error accepting booking:", error);
      });
  };

  // Function to handle rejecting a booking
  const rejectRequest = (id) => {
    UpdateBook(db, id, "rejected")
      .then(() => {
        console.log(`Booking ${id} rejected successfully.`);
        // Optionally, refresh the bookings list or update state
      })
      .catch((error) => {
        console.error("Error rejecting booking:", error);
      });
  };

  return (
    <div>
      <h2>Booking Requests</h2>
      <ul>
        {bookings.map((book) => (
          <li key={book.id}>
            <span>{book.userEmail}</span>
            <button onClick={() => acceptRequest(book.id)}>Accept</button>
            <button onClick={() => rejectRequest(book.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestTest;