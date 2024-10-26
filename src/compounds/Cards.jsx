const Cards = (props) => {
    return (
        <div style={{ backgroundColor: props.bgcolor }} className=" px-10 py-10 border rounded-md text-2xl flex-grow"  >
            <h1 >{props.title}</h1>
            <p>{props.subtitle}</p>

        </div>)
}
export default Cards