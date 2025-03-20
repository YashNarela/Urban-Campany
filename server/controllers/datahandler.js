
const DataHandler=async (req,res) => {
    
    try {
        
        console.log(req.files);

        res.send("ok")
        
    } catch (error) {
        
    }

}

module.exports={DataHandler}