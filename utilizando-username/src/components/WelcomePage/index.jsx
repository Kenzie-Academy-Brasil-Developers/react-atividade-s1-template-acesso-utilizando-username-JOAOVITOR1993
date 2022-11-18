
export function WelcomePage({user, setIsLoggedIn}){
    function handleLogout(){
        setIsLoggedIn(false)
    }

    return(
        <>
        <h1>Bem vindo, {user}!</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}