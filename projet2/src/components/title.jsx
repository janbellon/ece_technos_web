import { useState } from "react";

const Title = () => {
    const [title, setTitle] = useState("Hello World !")
    /*useEffect(async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
    })*/
    return (
        <h1>{title}</h1>
    )
}

export default Title