
const DataHandler=async (req,res) => {
    
    try {
        
        
        console.log(req.file);
        
        console.log(req.body);
        

        res.send("ok")
        
    } catch (error) {
        
    }

}

module.exports={DataHandler}