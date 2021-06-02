import React, { useState } from 'react';

function App() {

  const [name, setName]= useState("");
  const [lastname, setLastname]= useState("");
  const [guestList, setGuestList]= useState([]);

  const addGuestToList=(event)=>{
    event.preventDefault();
    let newGuest={name:name, lastName:lastname}
    setGuestList([...guestList, newGuest]);
    setName("");
    setLastname("");
  };
 
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={(event)=>addGuestToList(event)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input onChange={(event)=>setName(event.target.value)} type="text" className="form-control" name="first-name" value={name} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input onChange={(event)=>setLastname(event.target.value)} type="text" className="form-control" name="last-name" value={lastname}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              {guestList.map((guest) => (
                  <tr>
                  <td>{guest.name}</td>
                  <td>{guest.lastName}</td>
                  </tr>
                ))}  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default App


