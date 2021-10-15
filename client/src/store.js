import { configureStore } from "@reduxjs/toolkit";

import registrationReducer from "./components/registration-form/userRegistrationSlice";
import passwordReducer from "./components/password-reset/passwordSlice";
import ticketsReducer from "./pages/ticket-list/ticketsSlice";


const store = configureStore({
    reducer: {
        registration: registrationReducer,
        password: passwordReducer,
        tickets: ticketsReducer,
    }
})

export default store;