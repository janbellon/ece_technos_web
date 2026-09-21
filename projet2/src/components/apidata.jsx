import { useState, useEffect } from "react";

const ApiData = () => {
    const [body, setBody] = useState("body")

    const ApiCall = async () => {
        const response = await fetch("https://projet1-1gmz.onrender.com/message")
        const data = await response.json()
        setBody(data.message)
    }

    useEffect(() => {
        ApiCall()
    }, [])

    return (
        <div>
            <p>{body}</p>
        </div>
    )
}

export default ApiData