export interface UserContextInterface {
    children: React.ReactNode;
}

export interface InitUserContextProps {
    login: Function;
    logged: boolean;
    setLogged: Function;
    logout: Function;
    refreshToken: Function;
}

export interface ProfileContextInterface {
    children: React.ReactNode;
}

export interface InitProfileContextProps {
    isOpen: boolean;
    setOpen: any;
}
