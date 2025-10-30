export const protect=async(req,res,next)=>{
    try {
        const {userId}=await req.auth()
        console.log("Authenticated user ID:", userId);
        if(!userId){
            return res.status(401).json({message:"Unauthorized"})
        }

        return next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message:error.code || error.message})
        
    }
}