import { useState } from "react"
import Header from "./header"
import { Link, useNavigate } from "react-router-dom"
//import Landing from "./Landing"

//import Landing from './compounds/Landing';
const Login = (props) => {
    const navigate = useNavigate()
    const inputvalue = props.inputvalue
    const setvalue = props.setvalue
    const [check, setcheck] = useState(true)

    const [ename, setname] = useState("")
    const [epassword, setpassword] = useState("")

    const handlename = (evt) => {
        setname(evt.target.value)
    }
    const handlepassword = (evt) => {
        setpassword(evt.target.value)
    }

    const button = () => {
        {
            var zaheer = false
            inputvalue.forEach(function (person) {



                if (person.username == ename && person.password == epassword) {
                    setcheck(true)
                    console.log("happy")
                    zaheer = true
                    navigate("/Landing", { state: { ename } })

                }



                if (zaheer == false) {
                    setcheck(false)
                }



            })



        }




    }

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-16 border rounded-md">
                <Header wellcome={"Hey Hi"} wishing={check ? <p>i help you manage your activities after login</p> : <p className="text-red-600">please signup first</p>} ></Header>
                <div className=" flex flex-col gap-5">

                    <div>
                        <input value={ename} onChange={handlename} className="p-2 border rounded-md border-solid border-black" placeholder="username"></input>
                    </div>

                    <div>
                        <input value={epassword} onChange={handlepassword} className="p-2 border rounded-md border-solid border-black" placeholder="Password"></input>
                    </div>



                    <div>
                        <button onClick={button} className=" bg-red-400 p-2 border rounded-md">Login</button>
                        <p>Dont have an account  <Link to={"/Signup"}>Signup?</Link></p>
                    </div>

                </div>

            </div>
        </div >
    )

}

export default Login