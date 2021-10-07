import { configureStore } from "@reduxjs/toolkit";

import registrationReducer from "./components/registration-form/userRegistrationSlice";
import passwordReducer from "./components/password-reset/passwordSlice";

const store = configureStore({
    reducer: {
        registration: registrationReducer,
        password: passwordReducer,
    }
})

export default store;