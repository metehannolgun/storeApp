import { createSlice } from '@reduxjs/toolkit' //loading ekranı tüm uygulmayaı kapsadığı için bir app slice oluşturduk ve loading ekranını burda oluşturmaya başlıyoruz

const initialState = {
    loading: false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const { } = appSlice.actions

export default appSlice.reducer