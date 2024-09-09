import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import MyRoom from "./MyRoom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import { Table } from "flowbite-react";
import AddReview from "./AddReview";

const MyBooking = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const getBookedRooms = async () => {
    const res = await axios.get(`/booking/${user.email}`);
    return res.data;
  };

  const {
    data: bookedRooms = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookedByUser"],
    queryFn: getBookedRooms,
  });
  const fetchAgain = () => {
    refetch();
  };

  const inBooking = bookedRooms.filter(
    (item) => item?.status === "pending" || item?.status === "processing"
  );

  // Array with 'complete' and 'canceled'
  const inBooked = bookedRooms.filter(
    (item) => item?.status === "complete" || item?.status === "canceled"
  );
  if (isLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>MyBooking - HotelHub</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-12 px-5">
        {inBooking?.length > 0 ? (
          <div className="rounded py-10 px-5 md:px-10">
            <h2 className="text-3xl text-dark-01 text-center  font-semibold pb-4 mb-5 border-b border-gray-200">
              My Booking
            </h2>
            <div className="grid grid-cols-1 gap-5">
              {inBooking?.map((room) => (
                <MyRoom key={room._id} room={room} fetchAgain={fetchAgain}></MyRoom>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded py-10 px-16">
            <h2 className="text-3xl text-blue-1 font-semibold text-center pb-4 mb-5">
              You {"haven't"} Booked Room.
            </h2>
            <div className="text-center">
              <Link to={"/rooms"}>
                <button className="py-3 px-10 text-white bg-dark-03 border border-dark-03 rounded font-medium active:scale-95">
                  Explore Rooms
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto py-12 px-5">
        {" "}
        <h2 className="text-2xl text-dark-01 text-center  font-semibold pb-4 mb-5 border-b border-gray-200">
          My Booking History
        </h2>
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head className="bg-gray-200 text-center">
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Check-in</Table.HeadCell>
              <Table.HeadCell>Check-out</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {inBooked.map((room) => (
                <Table.Row key={room?._id} className="bg-white h-12 text-center">
                  <Table.Cell className="whitespace-nowrap font-semibold text-dark-01">
                    <Link className="hover:underline" to={`/room/details/${room.id}`}>
                      {room.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{room.startDate}</Table.Cell>
                  <Table.Cell>{room.endDate}</Table.Cell>
                  <Table.Cell>${room.price * room.bookingDays}</Table.Cell>
                  <Table.Cell
                    className={`${room.status === "canceled" ? "text-red-400" : "text-green-500"}`}
                  >
                    {room.status}
                  </Table.Cell>
                  <Table.Cell>
                    <AddReview _id={room.id} canceled={room.status === "canceled"} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
