import { useState } from "react";

function DateRangePicker() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="border-t border-gray-300 pt-2">
      <div className=" mb-5">
        <div className=" mb-2">
          <label
            htmlFor="start-date"
            className="block font-medium text-lg text-dark-01"
          >
            Check-in Date:
          </label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            className="py-1 block w-full px-2 border border-gray-300 rounded outline-none"
            value={startDate}
            onChange={(e) => handleStartDateChange(e.target.value)}
          />
        </div>
        <div className="">
          <label
            htmlFor="end-date"
            className="block font-medium text-lg text-dark-01"
          >
            Check-out Date:
          </label>
          <input
            type="date"
            id="end-date"
            name="end-date"
            className="py-1 block w-full px-2 border border-gray-300 rounded outline-none "
            value={endDate}
            onChange={(e) => handleEndDateChange(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button className="py-3 px-10 text-white bg-dark-03 border border-dark-03 rounded uppercase font-medium active:scale-95">
          Book Rooms
        </button>
      </div>
    </div>
  );
}

export default DateRangePicker;
