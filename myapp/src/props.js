function Learnprop(props) {
    console.log(props.name)
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h1>props component {props.name}</h1>
            <h1>Email : {props.email}</h1>
        </div>
    )
    
}

export default Learnprop;