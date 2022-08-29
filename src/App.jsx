// import "./styles.css";
import React from "react"
import Styles from "./Div.module.css"
// import ReactTable from "react-table";  


const initstage ={
  name: "",
  isMarrid: "",
  country:"",
  gender:"",
  email:"",
  age:"",
  Department :"",
  Salary:""

}


export default function App() {

  const [formdata,setFormdata]= React.useState(initstage)
  const [data,setData] = React.useState([])
  const fileRef = React.useRef(); 
  const handlechange = (e) =>{

    let {name, value, checked,type} = e.target;
    value = type ==="checkbox" ? checked:value;

    setFormdata((prev)=>({...prev,[name]:value}));
  };

  const onSubmit =(e)=>{

    e.preventDefault();
    // console.log(formdata)
    setData([...data,formdata])

    console.log(data);
    // console.log(fileRef.current.files[0].name)
  }


  const {name,isMarrid,country,gender,email,age,Department,Salary}= formdata

  return (
    <div className={Styles.dee}>
    <div className={Styles.first}>
     <h1>user deltles</h1>
     <form action="" onSubmit={onSubmit} >

     <label htmlFor=""> name 
    <input type="text" name="name"  onChange={handlechange} value={name}/>
    <br/>
    <br/>
    </label> <label htmlFor=""> email 
    <input type="text" name="email"  onChange={handlechange}value={email}/>
    <br/>
    <br/>
    </label> <label htmlFor=""> Marrid
    <input type="checkbox" name="isMarrid"  onChange={handlechange} checked={isMarrid}/>
    <br/>
    <br/>

    <label htmlFor="">age

    <input type="text" name="age"  onChange={handlechange}value={age}/>

    </label>
    <br/>
    <br/>
    </label> <label htmlFor=""> country 
    <input type="text" name="country"  onChange={handlechange} value={country}/>
    <br/>
    <br/>
    </label> <label htmlFor=""> gender
    <select name="gender"  onChange={handlechange} value={gender}>
    <option value="M">M</option>
    <option value="F">F</option>
    <option value="D">not to say</option>


    </select>
  
    </label>
    <br/>
    <br/>

    <label htmlFor="">Department 
    <select name="Department" onChange={handlechange} value={Department} >
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      </select>

    </label>
    <br/>
    <br/>

      <label htmlFor="">
      Salary
      <input type="text" name="Salary" onChange={handlechange} value={Salary}/>



      </label>

    <input type="file" ref={fileRef} />    
    
<br/>
<br/>
<input type="submit"/>

     </form>
    </div>

    <div className={Styles.dee1}>{
      
      <table>
        <tr>
    <th>name</th>
    <th>country</th>
    <th>email</th>
    <th>gender</th>
    <th>Salary</th>
    <th>Department</th>
    <th>age</th>
  </tr>
      {data.map(row => (
        <tr >
          <td>{row.name}</td>
          <td>{row.country}</td>
          <td>{row.email}</td>
          <td>{row.gender}</td>
          <td>{row.Salary}</td>
          <td>{row.Department}</td>
          <td>{row.age}</td>
        </tr>
      ))}
      </table>
      
      
      }

    {/* {data.map((e)=>(
      
       <p>{e.name}</p>
  
    ))} */}


    </div>
    </div>

  );
}
