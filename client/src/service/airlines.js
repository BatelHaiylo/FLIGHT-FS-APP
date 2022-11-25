baseUrl = 'http://localhost:4000/flights'

export const getAllFlights = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAFlightById = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAFlightByParam = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const addAFlight = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const updateAFlight = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const deleteAFlight = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};
