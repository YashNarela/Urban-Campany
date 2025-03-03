import React, { useEffect } from 'react'
import axios from 'axios'
const LoginCheck = () => {



    async function tokenCheck() {


        try {
            let localdata = JSON.parse(localStorage.getItem("ob"))

            let token = localdata.toki
            console.log(token);


            let api = import.meta.env.VITE_API_URL

            let rsp = await axios.post(`${api}/user/auth`, null, { headers: { "mytoken": token } });


            console.log(rsp);





        } catch (error) {


            console.log(error);


        }



    }


    useEffect(() => {


        tokenCheck()




    }, [])


    return (
        <>

        </>
    )
}

export default LoginCheck
