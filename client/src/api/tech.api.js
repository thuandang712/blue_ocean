import axios from "axios";

const rootUrl = "https://blue-ocean-ticketing-system.herokuapp.com/api/";
const techURL = rootUrl + "tech";



export const fetchTech = async () => {

  try {
    const res = await axios.get(techURL, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });

    return res.data

  } catch (error) {
    console.log(error);
    return error
  }
}


export const createTech = async (obj) => {

  try {
    const res = await axios.post(techURL, obj, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });

    return res.data;

  } catch (error) {
    console.log(error)
    return error
  }
};



export const fetchSingleTech = async (_id) => {
  try {
    const res = await axios.get(techURL + `/${_id}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });

    return res.data;

  } catch (error) {
    console.log(error)
    return error
  }
}


export const deleteSingleTech = async (_id) => {
  try {
    const res = await axios.delete(techURL + `/${_id}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });

    return res.data;

  } catch (error) {
    console.log(error)
    return error
  }
}


export const updateSingleTech = async (_id, obj) => {
  try {
    const res = await axios.patch(techURL + `/${_id}`, obj, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });

    return res.data;

  } catch (error) {
    console.log(error)
    return error
  }
}