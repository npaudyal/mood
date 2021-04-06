import React, {useEffect, useState} from 'react'
import { MainWrapper } from './HomePage'
import Nav from '../Nav/Nav'
import axios from 'axios'
import MaterialTable from 'material-table'


const Admin = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        console.log(users)
        axios.get('/api/users/all').then((res) => {
            setUsers(res.data);
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const deleteUser = (index) => {
       
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        const userOne = users[index]
        const body = JSON.stringify({email:userOne.email});
    
        axios.post('/api/users/delete', body, config).then((res) => {
          
        }).catch(error => {
            console.log(error)
        })
    }


    const columns = [
        {title:"Name", field: 'name'
        },
        {title:"Email", field: 'email'
        },
        {title:"role", field: 'role'       },
        {title:'Registered Date', field:'register_date'}
    ]

    return (
        <>
    <Nav />
    <MainWrapper>
        <MaterialTable 
            style={{ padding: '10px 20px', width:'85vw', fontSize:'14px', marginTop:'30px' }}
            title = "Users Information"
            data= {users}
            columns = {columns}
            editable ={{
                onRowDelete:selectedRow => new Promise((resolve, reject) => {
                    const index = selectedRow.tableData.id;
                    
                    const updatedRow = [...users]
                    updatedRow.splice(index, 1)
                   
                    //delete from databaase
                    //setData
                    setUsers(updatedRow)
                    deleteUser(index);
                    resolve()
                })
            }}
            options={{
                actionsColumnIndex:-1
            }}

            localization={{ body: { editRow: { deleteText: 'Do you want to remove this user from database?' } } }}

            
              
            
        />
    </MainWrapper>
    </>
    )
}

export default Admin
