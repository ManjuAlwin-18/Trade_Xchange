import { createContext,useState } from "react";


export const PostContext = createContext(null)

function Post ({children}) {

    const [postDetails,setPostdeatils] = useState()
    return(
        <PostContext.Provider value={{postDetails,setPostdeatils}}>
            {children}
        </PostContext.Provider>
    )
}

export default  Post