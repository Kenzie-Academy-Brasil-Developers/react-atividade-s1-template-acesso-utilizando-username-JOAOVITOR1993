import { useState } from "react";

export function GetUserComponent({setUser, setIsLoggedIn}){
    const [userInput, setUserInput] = useState("")

    function handleLogin(){
        setUser(userInput)
        setIsLoggedIn(true)
    }

    return(
        <form onSubmit={(event) => handleLogin(event.preventDefault())}>
            <input 
            type="text" 
            placeholder="Insira seu nome" 
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            />
            <button type="submit">Acessar com o nome</button>
        </form>
    )
}