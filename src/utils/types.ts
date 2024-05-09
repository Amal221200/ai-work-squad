import { Dispatch, SetStateAction } from "react"

export interface UserDataType {
    username: string,
    password: string
}

export interface AuthContextType {
    userData: UserDataType | null,
    setUserData: Dispatch<SetStateAction<UserDataType | null>>
}