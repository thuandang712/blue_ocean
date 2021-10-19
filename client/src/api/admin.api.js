import axios from "axios";

const rootUrl = "https://blue-ocean-ticketing-system.herokuapp.com/api/";
const adminLoginUrl = rootUrl + "admin/login";
const adminLogoutUrl = rootUrl + "admin/logout";


export const adminLogin = async obj => {
    try {
        const res = await axios.post(adminLoginUrl, obj);

        if (res.data.status === "success") {
            sessionStorage.setItem("accessJWT", res.data.accessJWT);
            localStorage.setItem(
                "crmSite",
                JSON.stringify({ refreshJWT: res.data.refreshJWT })
            );
        }

        return res.data

    } catch (error) {
        console.log(error)
    }
}


export const adminLogout = async () => {
    try {
        await axios.delete(adminLogoutUrl, {
            headers: {
                Authorization: sessionStorage.getItem("accessJWT"),
            },
        });
    } catch (error) {
        console.log(error);
    }
};



// export const fetchNewAccessJWT = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

//       if (!refreshJWT) {
//         reject("Token not found!");
//       }

//       const res = await axios.get(newAccessJWT, {
//         headers: {
//           Authorization: refreshJWT,
//         },
//       });

//       if (res.data.status === "success") {
//         sessionStorage.setItem("accessJWT", res.data.accessJWT);
//       }

//       resolve(true);
//     } catch (error) {
//       if (error.message === "Request failed with status code 403") {
//         localStorage.removeItem("crmSite");
//       }

//       reject(false);
//     }
//   });
// };


// const newAccessJWT = rootUrl + "tokens";
// const userVerificationUrl = userProfileUrl + "/verify";

// export const userRegistration = (frmData) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = await axios.post(userProfileUrl, frmData);

//       resolve(res.data);

//       if (res.data.status === "success") {
//         resolve(res.data);
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
// export const userRegistrationVerification = (frmData) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = await axios.patch(userVerificationUrl, frmData);

//       resolve(res.data);
//       if (res.data.status === "success") {
//         resolve(res.data);
//       }
//     } catch (error) {
//       reject({ status: "error", message: error.error });
//     }
//   });
// };