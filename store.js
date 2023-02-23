import {
    configureStore
} from '@reduxjs/toolkit'
import singularReducer from "./slices/singular"

export default configureStore({
    reducer: {
        singulars: singularReducer
    }
})