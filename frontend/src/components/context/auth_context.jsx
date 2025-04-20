import { createContext, useState } from "react";

export const AuthContext= createContext({
    email:"",
    phone:"",
    fullName:"",
    role: "",
    avatar:"",
    id:""
})



export const AuthWrapper = (props) =>{
    const [isAppLoading, setIsAppLoading]= useState(true)
    const [prompt, setPrompt]= useState("")
    const [user,setUser] = useState({
        email:"",
        phone:"",
        fullName:"",
        role: "",
        avatar:"",
        id:""
    })
    
    return (
        <AuthContext.Provider value={{
            user,setUser,
            isAppLoading, setIsAppLoading,
            prompt, setPrompt}}>
            {props.children}
        </AuthContext.Provider>
    )

}

