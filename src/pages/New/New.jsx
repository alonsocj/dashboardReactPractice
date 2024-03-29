import './new.scss'
import PropsTypes from 'prop-types'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { useState } from 'react'

const New = ({ inputs, title }) => {
  New.propTypes = {
    inputs: PropsTypes.object.isRequired,
    title: PropsTypes.string.isRequired
  }

  const [file, setFile] = useState(null)

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1 className='title'>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file
                ? URL.createObjectURL(file)
                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            } alt="profile"/>
          </div>
          <div className="right"><form>
            <div className="formInput">
              <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
              <input type="file"
                id='file'
                onChange={e => setFile(e.target.files[0])}
                style={{ display: 'none' }}/>
            </div>
            {inputs.map((input, _index) => (
              <div className="formInput" key={_index}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            <button>Send</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
