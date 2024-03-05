
function person()
{
    return(
        <div>
            <h1>Person</h1>
            <p>Your age: {Math.floor(Math.random() * 30)}</p>
        </div>
    )
}

export default person;