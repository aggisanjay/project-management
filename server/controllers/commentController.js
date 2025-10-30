

//Add comment

import prisma from "../configs/primsa.js";

export const addComment=async(req,res)=>{
    try {
        const {userId}=await req.auth();
        const {content,taskId}=req.body;

        //check if user is project member
        const task=await prisma.task.findUnique({
            where:{id:taskId}
        });

        const project=await prisma.project.findUnique({
            where:{id:task.projectId},
            include:{members:{include:{user:true}}}
        });
        if(!project){
            return res.status(404).json({message:"Project not found"});
        }

        const member=project.members.find(member=>member.userId===userId);
        if(!member){
            return res.status(403).json({message:"Only project members can add comments"});
        }

        const comments=await prisma.comment.create({
            data:{
                content,
                taskId,
                userId
            },
            include:{user:true}
        });
        res.json({comments, message:"Comment added successfully"});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.code|| error.message });
        
    }
}


//Get comments for a task

export const getTaskComments=async(req,res)=>{
    try {
        
        const {taskId}=req.params;
        const comments=await prisma.comment.findMany({
            where:{taskId},
            include:{user:true},
            
        });
        res.json({comments});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.code|| error.message });
    }
}