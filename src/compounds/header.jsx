const Header = (props) => {

    return (<div>
        <h1 className="text-3xl font-medium">{props.wellcome}</h1>
        <p>{props.wishing}</p>
        <br />
    </div>

    )
}



export default Header