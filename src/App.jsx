import ProjectSideBar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const [projectState,setProjectState]=useState({
    selectProjectId:undefined,
    project:[]
  })
  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectProjectId:null
      }
    })
  }
  function handelAddProject(projectData){
    setProjectState((prevState)=>{
      const newProject={
        ...projectData,
        id:Math.random()
      }
      return {
        ...prevState,
        project:[...prevState.project,newProject],
        
      }
    })
  }
  console.log(projectState)
  let content
  if (projectState.selectProjectId===null){
    content=<NewProject onAdd={handelAddProject}/>
  } 
  else if (projectState.selectProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <>
    <main className="h-screen my-8 flex gap-8"> 
      <ProjectSideBar onStartAddProject={handleStartAddProject}/>
      {content}
      </main>
    </>
  );
}

export default App;
