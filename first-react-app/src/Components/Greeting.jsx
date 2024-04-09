
function Greeting() {
    return (
    <div className="Greeting componentBox">
        <div className="Greeting">Hello, {greeting.user}</div>
        <Greeting user={greeting.user} />
        <div className="greeting-text">{props.text}</div>

    </div>
    )
}

export default Greeting