import { testApi } from "../../api/endpoints/testApi";

export const SET_LOADING_API = "SET_LOADING_API";
export const SET_ERROR_API = "SET_ERROR_API";
export const SET_API_PIC = "SET_API_PIC";

export const setLoadingApi = (isLoading)=> ({
    type: SET_LOADING_API,
    payload: isLoading
})

export const setErrorApi = (error) => ({
    type: SET_ERROR_API,
    payload: error
})

export const setApiPic = (url) => ({
    type: SET_API_PIC,
    payload: url
})

export const getApiPicThunk = async (dispatch) => {
   dispatch(setLoadingApi(true))

   try {
   const data =  await testApi.get() 
    dispatch(setApiPic(data.image))

   } 
   catch(e) {
       dispatch(setErrorApi(e))
   }

   dispatch(setLoadingApi(false))
}