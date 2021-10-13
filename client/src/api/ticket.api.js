import axios from "axios";

const rootUrl = "http://localhost:5000/api/";
const ticketURL = rootUrl + "ticket"


export const fetchTicket = async () => {

    try {
        const res = await axios.get(ticketURL, {
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


export const createTicket = async (obj) => {

    try {
        const res = await axios.post(ticketURL, obj, {
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



export const fetchSingleTicket = async (_id) => {
    try {
        const res = await axios.get(ticketURL + `/${_id}`, {
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


export const deleteSingleTicket = async (_id) => {
    try {
        const res = await axios.delete(ticketURL + `/${_id}`, {
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


