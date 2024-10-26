import { Link, useNavigate } from "react-router-dom"
import Header from "./header"
import { useState } from "react"
const Signup = (props) => {
    const navigate = useNavigate()
    const inputvalue = props.inputvalue
    const setvalue = props.setvalue
    const [ename, setname] = useState("")
    const [epassword, setpassword] = useState("")


    const handlename = (evt) => {
        setname(evt.target.value)
    }
    const handlepassword = (evt) => {
        setpassword(evt.target.value)
    }

    const signbutton = () => {

        setvalue([...inputvalue, { password: epassword, username: ename }])
        setname(" ")
        setpassword("")
        navigate("/")

    }
    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-16 border rounded-md">
                <Header wellcome={"Hey Hi"} wishing={"you can Signup here:)"} ></Header>
                <div className=" flex flex-col gap-5">

                    <div>
                        <input value={ename} onChange={handlename} className="p-2 border rounded-md border-solid border-black" placeholder="username"></input>
                    </div>

                    <div>
                        <input value={epassword} onChange={handlepassword} className="p-2 border rounded-md border-solid border-black" placeholder="password"></input>
                    </div>

                    <div>
                        <input className="p-2 border rounded-md border-solid border-black" placeholder="confirm password"></input>
                    </div>

                    <div>
                        <button onClick={signbutton} className="bg-yellow-500 p-2 border rounded-md">Sign up</button>
                        <p>Dont have an account <Link to={"/login"}>Login ?</Link></p>
                    </div>

                </div>

            </div>
        </div >
    )

}

export default Signup