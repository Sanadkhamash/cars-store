import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carsData from "../../data/carsData";
import Popup from "./popup";
import "./formStyle.css";

function BookingForm() {
  // Gitting Product Id from the param (URL)
  let { id } = useParams();

  //State for the submit button to show the confromation pop-up
  const [submitted, setSubmitted] = useState(false);

  //State to pass reservation object to PopUp component
  const [test, setTest] = useState(null);

  //To handle the case if there is no key named reseravations
  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));

  // To get the user's info in order to auto fill the input fields

  const handleInputChange = (e) => {
    const { id, value } = e.target;
  };

  //****************** Start Date*******************//
  //Min and default//
  let lcl = JSON.parse(localStorage.getItem("reservations"));
  let found;
  let starting;
  let indx;

  // To allow user to make a new res one day after the old res ends if there is an old res in the local storage
  for (let i in lcl)
    if (lcl[i].id == id) {
      indx = i;
      let starting1 = new Date(lcl[i].start)
      let mid = starting1.getDate();
      starting1.setDate(mid + 1);
      let start = starting1.toISOString();
      starting = start.substring(0, 10);
      found = true;
    }

    //To set the minimum of starting date based on today if there is no res in the local storage
  let today = new Date();
  const start = today.toISOString();
  const valueCut1 = start.substring(0, 10);
  const [valueCut, setValueCut] = useState(found ? starting : valueCut1);

  //Get min hour
  let minHour = found ? lcl[indx].hour : `${(today.getHours()+2).toString()}:00`

  const handleDateChange = (e) => {
    setValueCut(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let reservation = {
      firstName: e.target.fName.value,
      lastName: e.target.lName.value,
      email:e.target.email.value,
      id: id,
      tel: e.target.tel.value,
      start: valueCut,
      hour: e.target.hours.value,
    };

    // To show the POPUP message after clicking submit
    setSubmitted(true);
    // To carry the reservation object as a prop to the POPUP component
    setTest(reservation);
  };

  return (
    <>
      <div className="car-form-container ">
        <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="textsCont">
            <div className="texts" id="texts1">
              <input
                onChange={(e) => handleInputChange(e)}
                required
                placeholder="First Name"
                type="text"
                name="fName"
                id="fName"
              />
              <input
                onChange={(e) => handleInputChange(e)}
                required
                placeholder="Last Name"
                type="text"
                name="lName"
                id="lName"
              />
            </div>
            <div className="texts" id="texts2">
              <input
                required
                placeholder="Email"
                onChange={() => {
                  return null;
                }}
                type="email"
                name="email"
                id="email"
              />
              <input
                type="tel"
                pattern="[0-9]{10}"
                required
                placeholder="Mobile Number"
                name="tel"
                id="tel"
              />
            </div>
          </div>
          <div className="dates">
            <input
              onChange={(e) => handleDateChange(e)}
              value={valueCut}
              type="date"
              name="start"
              min={found ? starting : valueCut1}
            />
            <input required type="time" name="hours" min={minHour}  />
          </div>
          <div className="submit">
            <input type="submit" value="Book Now !" />
          </div>
        </form>

        {found && (
          <>
            <h2 className="register-label">
              You already have a reservation on {lcl[indx].start} at {lcl[indx].hour}
            </h2>
          </>
        )}
      </div>
      {submitted&&
      <Popup test={test} setSubmitted={setSubmitted} />}
    </>
  );
}

export default BookingForm;
