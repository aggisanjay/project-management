import  express  from  'express' ;
import { addMemberToProject, createProject, updateProject } from '../controllers/projectController.js';

const projectRouter= express.Router();

projectRouter.post('/',createProject);
projectRouter.put('/',updateProject);
projectRouter.post('/:projectId/addMember',addMemberToProject);
export default projectRouter;