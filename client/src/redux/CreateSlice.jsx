import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({

    name: "cart",

    initialState: {
        value: 0,
    },

    reducers: {

        Add: (state, actions) => {



            state.value = state.value + 1

        },

        Remove: (state, actions) => {



            if (state.value > 0) {
                state.value = state.value - 1
            }
        }

    }

})

export const { Add, Remove } = slice.actions
export default slice.reducer;