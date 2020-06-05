import {configureStore} from '@reduxjs/toolkit';
import APIReducer from './reducer'
import {PreLoadedData} from './PreLoadedData'

export default configureStore({
    reducer: {
        store: APIReducer
    },
    preloadedState: {store: PreLoadedData}
});
