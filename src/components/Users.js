import { Link } from "react-router-dom";
export default function Users (){
    const array2 =  [
        { Name: 'Paul George', Email: 'paul.george@gmail.com', Page: 'paulgeorge' },
        { Name: 'John Wick', Email: 'john.wick@gmail.com', Page: 'johnwick' },
        { Name: 'Luisa Williamson', Email: 'luisa.williamson@gmail.com', Page:'luisawilliamson' },
        { Name: 'Annie Chuppo', Email: 'annie.chuppo@gmail.com', Page: 'anniechuppo'}
    ]
    return (
        <>
        <h1>Users</h1>
        {array2.map((item,i) => {
          return  <div style={{
            backgroundColor: 'yellowgreen', border: '4px solid black', margin: '50px'}}
          ><h3> user#{i+1}</h3> <h2> Name:  {item.Name}</h2> <Link to={`/users/${item.Page}`}>more info</Link> </div>
        }
            
        )}
        
        </>
    )
}


