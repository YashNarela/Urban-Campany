import React, { useState } from 'react'

import axios from "axios"

const InsertData = () => {

    const [imgInsert, setImgInsert] = useState("")


    async function dataHandler() {

        try {



        } catch (error) {

        }
    }


    async function imageHandler(e) {

        try {

            console.log(imgInsert);

            setImgInsert({ [e.target.name]: e.target.files[0] });




        } catch (error) {

            console.log(error);

        }
    }


    async function submitHandler() {

        let api = 'http://localhost:8000/user/insertimg'
        try {



            const formdata = new FormData()

            formdata.append("images", imageHandler)


            let rsp = await axios.post(api, formdata)

            console.log(rsp.data);



        } catch (error) {

            console.log(error);
            
        }
    }

    return (
        <div>



            <h2>InsertData</h2>



            <input type="file" name='image' onChange={imageHandler} />
            <br />

            <button onClick={submitHandler}   >Submit</button>





        </div>
    )
}

export default InsertData