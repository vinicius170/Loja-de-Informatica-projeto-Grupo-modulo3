import {useState, useEffect} from "react";
import Api from "../../axios/config";


const Minfo = () => {

  const [posts, setPosts ] = useState([]);
  
  const getInf = async() => {
    
     try{
    const response = await Api.get("/computadores")
    const data = response.data
    

    setPosts(data)
  
  }
  catch(error){ console.log(error)}
} 

useEffect(()=>{
 getInf()
},[] )

return <div >
<h1>Computadores</h1>
<div className="computadores">
 
{posts.length === 0 ? (<p>Carregando...</p>) : (posts.map((posts) => (
    <div className="compu" key={posts.id}>
      <h1>{posts.id}</h1>
     <h2>{posts.processador}</h2>
     <h2>{posts.placa-de-video}</h2>
     <h2>{posts.Placa-Mae}</h2>
     <h2>{posts.memoria-ram}</h2>
     <h2>{posts.ssd}</h2>
    </div>
    
  )))}</div>
 
  </div>


 

}



export default  Minfo