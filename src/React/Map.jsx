import { border } from '@material-ui/system'
import React from 'react'




const arr = [
    {
        name: 'zahid',
        Fname: 'ghafoor',
        class: 'I.T',
        Rollno: '406',
        school: 'Pakistan'
    },
    {
        name: 'tata',
        Fname: 'saleem',
        class: 'Bsc',
        Rollno: '420',
        school: 'India'
    },
    {
        name: 'jin',
        Fname: 'rand',
        class: 'I.t',
        Rollno: '455',
        school: 'kasur'
    },
    {
        name: 'Junaid',
        Fname: 'Latif',
        class: 'I.T',
        Rollno: '500',
        school: 'Kaisar'
    },
    {
        name: 'Tayyab',
        Fname: 'Zahid',
        class: 'I.T',
        Rollno: '550',
        school: 'Herra Mandi'
    },

]

const info=(val)=>{
    return(
        <>
                <h1>Your first name is {val.name} </h1>
                <h1>Your Last name is {val.Fname} </h1>
                <h1>Your class is {val.class} </h1>
                <h1>Yor roll no is {val.Rollno} </h1>
                <h1>Your City name is {val.school} </h1>
                <hr />
</>
    ) 
}



const Map = () => {
    return (
        <>
        {arr.map(info)}
        </>
    )
}

export default Map
