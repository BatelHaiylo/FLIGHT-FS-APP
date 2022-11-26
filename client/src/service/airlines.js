baseUrl = "http://localhost:4000/FlightApp/airlines";

export const getAllFlights = async () => {
  try {
    return await fetch(baseUrl).then((res) => res);
  } catch (e) {
    console.log(e);
  }
};

export const getAFlightById = async () => {
  try {
    return await fetch(baseUrl).then((res) => res);
  } catch (e) {
    console.log(e);
  }
};

export const getAFlightByParam = async (param) => {
  try {
    return await fetch(`${baseUrl}/${param}`).then((res) => res);
  } catch (e) {
    console.log(e);
  }
};

export const addAFlight = async () => {
  try {
    const airline = {
      companyName: "Haiylo Fly",
      OriginCountry: "Israel",
      airplanes: 45,
      NumberOfSeats: 10,
      availableFlights: 2,
    };
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(airline),
    };
    return await fetch(baseUrl,option)
    .then((res) => res.push(airline));
  } catch (e) {
    console.log(e);
  }
};

export const updateAFlight = async () => {
  try {
    const airline = {
        companyName: "Haiylo Fly",
        OriginCountry: "Israel",
        airplanes: 75,
        NumberOfSeats: 24,
        availableFlights: 31,
      };
    const option = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(airline),
      };
    return await fetch(baseUrl)
    .then((res) => res);
  } catch (e) {
    console.log(e);
  }
};

export const deleteAFlight = async () => {
  try {
    return await fetch(baseUrl).then((res) => res);
  } catch (e) {
    console.log(e);
  }
};
