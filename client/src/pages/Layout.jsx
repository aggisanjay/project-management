// import { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
// import { Outlet } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { loadTheme } from '../features/themeSlice'
// import { Loader2Icon } from 'lucide-react'
// import { CreateOrganization, SignIn, useAuth, useUser } from '@clerk/clerk-react'
// import { fetchWorkspaces } from '../features/workspaceSlice'

// const Layout = () => {

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//     const { loading,workspaces } = useSelector((state) => state.workspace)
//     const dispatch = useDispatch()
//     const {user,isLoaded}=useUser()
//     const {getToken}=useAuth()

//     // Initial load of theme
//     useEffect(() => {
//         dispatch(loadTheme())
    
//     }, [])

//     //Initial load of workspaces

//     useEffect(()=>{
//         if( user && isLoaded && workspaces.length===0){

//             dispatch(fetchWorkspaces({getToken}))
//         }


//     },[user, isLoaded])

//     if(!user){
//         return(
//             <div className='flex justify-center items-center h-screen bg-white dark:bg-zinc-950'
//             >
//                 <SignIn/>

//             </div>
//         )
//     }


//     if (loading) return (
//         <div className='flex items-center justify-center h-screen bg-white dark:bg-zinc-950'>
//             <Loader2Icon className="size-7 text-blue-500 animate-spin" />
//         </div>
//     )

//     if(user && workspaces.length===0){
//         return(
//             <div className='min-h-screen flex justify-center items-center'>
//                <CreateOrganization />
//             </div>
//         )
//     }

//     return (
//         <div className="flex bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100">
//             <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//             <div className="flex-1 flex flex-col h-screen">
//                 <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//                 <div className="flex-1 h-full p-6 xl:p-10 xl:px-16 overflow-y-scroll">
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Layout


import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { CreateOrganization, SignIn, useAuth, useUser, useOrganizationList } from '@clerk/clerk-react';
import { fetchWorkspaces } from '../features/workspaceSlice';
import { loadTheme } from '../features/themeSlice';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { loading, workspaces, currentWorkspace } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const { organizationList, isLoaded: orgLoaded } = useOrganizationList();
  const navigate = useNavigate();

  // Load theme on mount
  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  // Fetch workspaces when user or organizations change
  useEffect(() => {
    if (user && isLoaded && orgLoaded) {
      dispatch(fetchWorkspaces({ getToken }));
    }
  }, [user, isLoaded, orgLoaded, organizationList, dispatch, getToken]);

  // Redirect to dashboard once workspace is ready
  useEffect(() => {
    if (!loading && currentWorkspace) {
      navigate('/');
    }
  }, [loading, currentWorkspace, navigate]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-zinc-950">
        <SignIn />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-zinc-950">
        <Loader2Icon className="size-7 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (user && workspaces.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <CreateOrganization />
      </div>
    );
  }

  return (
    <div className="flex bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col h-screen">
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex-1 h-full p-6 xl:p-10 xl:px-16 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
