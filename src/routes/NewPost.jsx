
import Api from "../axios/config"
import { userState} from "react"

import "./css/NewPost.css"

const NewPost = () => {
  return (
    <div className='new'>
      <h2>Incerir novo produto</h2>
      <form>
        <div className='form-control'>
          <label htmlFor="title">Produto</label>
          <input type="text" name='title' placeholder='Digite o titulo' />
        </div>
      </form>
    </div>
  )
}

export default NewPost