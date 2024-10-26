import { useState } from "react"
const Todo = () => {
    const [input, setinput] = useState(" ")
    const [list, setlist] = useState([{id:1,Acttivity:"wake up at 6am"}])
    const inputhandle = (evt) => {
        setinput(evt.target.value)
    }
    const listhandle = () => {
        setlist([...list, { id: list.length + 1, Acttivity: input }]) 
        setinput(" ")
    }
    const remove = (remoid) => {
        var temp = list.filter(function (list) {
            if (list.id == remoid) {  return (false) }
            else { return (true) }
        })
        setlist(temp)
    }
    return (

        <>
            <div className="mt-6">
                <h1 className="text-3xl">Manage Activities </h1>
                <br />

                <input
                    placeholder="Next Activity?"
                    className=" p-1 border-solid border-black border-2 border rounded-md"
                    type="text"
                    value={input}
                    onChange={inputhandle}
                ></input>

                <button
                    onClick={listhandle}
                    className="  p-1 bg-black text-white border rounded-md "
                    type="text">Add</button>
            </div>
                         
                          {/* todolist */}


            <div className="bg-[#DBC4FE] p-2 border rounded-md flex-grow mt-6 flex-wrap"  >
                <h1 className="text-3xl ">Today Activity</h1>
                
                  { list.length===0?<p>you haven't added anything yet</p>:" " }
                  
              
                <ul>
                    { 
                     
                        list.map(function (mlist ,index) {

                            return (
                                  <div className="flex justify-between">
                            <li> {index+1}.{mlist.Acttivity}</li>
                           
                                
                            <button className="text-red-600" onClick={() => remove(mlist.id)} >belete</button> 
                            </div>
                            
                            )
                                
                        })
                        
                    }
                </ul>
                

            </div>
        </>
    )

}

export default Todo