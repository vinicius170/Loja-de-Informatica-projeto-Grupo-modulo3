import {useState, useEffect} from "react";
import axios from "axios";
import url from "../component/Api"



const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {
     try{
    const response = await axios.get(url + "computadores")
    const data = response.data

    setPosts(data)
    console.log(data)
  }
  catch(error){ console.log(error)}
} 

useEffect(()=>{
 getPosts()
},[] )

return <div>
  <h1>Computadores</h1>
  {posts.length === 0 ? (<p>Carregando...</p>) : (posts.map((posts) => (
    <div className="post" key={posts.id}>
      <h2>{posts.nome}</h2>
      <img src={posts.imagem} />
     
    </div>
  ) )
  )}
</div>





}



export default  Home





//     .then(response => {
//     const data = response.data
//     console.log(data)
//     document.getElementById('im').setAttribute('src',data);
//     return(
//           <img  />,
//           <h2 id="nome"></h2>,
//           <h3 id="id"></h3>,
//           <SaibaMais />
      
        
//         );

//     }
//     .catch((erro) => {console.log(erro)})
// }

