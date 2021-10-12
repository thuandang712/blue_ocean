import axios from "axios";

const rootUrl = "http://localhost:5000/api/";
const ticketURL = rootUrl + "ticket"


export const fetchTicket = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");

            if (!accessJWT) {
                reject("Token not found!");
            }

            const res = await axios.get(ticketURL, {
                headers: {
                    Authorization: accessJWT,
                },
            });

            resolve(res.data);
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    });
};
