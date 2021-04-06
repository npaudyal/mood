import React , {useState} from 'react'
import styled from 'styled-components'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import axios from 'axios'
import { editName, loadUser } from '../../actions/authActions'
import {useSelector, useDispatch} from 'react-redux'

const EditProfile = ({changeToFalse}) => {

  const user = useSelector(state => state.auth.user)
  const [name, setName] = useState('');
    const dispatch = useDispatch();
    const changeName = () => {

      
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        const body = JSON.stringify({name, email:user.email});
        //databse work
        axios.post('/api/users/editName', body, config).then(res =>{
            dispatch(editName({name, email:user.email, id:user.id, register_date:user.register_date, role:user.role }))
            changeToFalse();
        })
        
    }

   

    

    return (
        <div style={{paddingLeft:'3.5rem', display:'flex', flexDirection:'row'}}>
          
           <InputPlace onChange={event=>setName(event.target.value)}/>
           <Check  onClick ={changeName}  />
          
        </div>
    )
}

const InputPlace = styled.input`
background: transparent;
  color: #fff;
  margin-bottom: 5px;

  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: white;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: left;
  padding:10px;
  &:active {
    border-color: orange;
  }

`

const Check = styled(IoIosCheckmarkCircleOutline)`
    color:white;
    margin-left:10px;
    font-size:2rem;
    
`

export default EditProfile
