import React, { createContext, FunctionComponent, useState } from 'react';

import { InitProfileContextProps, ProfileContextInterface } from '../../types/ContextTypes';

export const ProfileContext = createContext({} as InitProfileContextProps);

export const ProfileProvider: FunctionComponent<ProfileContextInterface> = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    const providerValue = {
        isOpen,
        setOpen,
    };

    return <ProfileContext.Provider value={providerValue}>{children}</ProfileContext.Provider>;
};
