import { useLocation } from "react-router-dom"
import Header from "./header"
import Cards from "./Cards"
import Todo from "./todo"


const Landing = () => {
    const username = useLocation()
    return (
        <>
            <div className='bg-black p-16 ' >
                <div className='bg-[#EFEFEF] p-5 border rounded-md'>

                    { /*heading*/}
                    <Header wellcome={<h1>hello {username.state.ename}</h1>} wishing={"I help to manage your activities:)"} ></Header>
                    {/*cards*/}
                    <div className="flex justify-between gap-7 flex-wrap" style={{ textAlign: "center" }} >
                        <Cards bgcolor={"#8272DA"} title={"23 C"} subtitle={"Vellore"}></Cards>
                        <Cards bgcolor={"#FD6663"} title={"July"} subtitle={"7"}></Cards>
                        <Cards bgcolor={"#FCA201"} title={"Bulid Using"} subtitle={"react"}></Cards>
                    </div>

                    {/*todo*/}
                    <div className="flex gap-5">
                        <Todo></Todo>
                        { /*<Todolist></Todolist> */}

                    </div>

                </div>
            </div>
        </>
    )

}





export default Landing