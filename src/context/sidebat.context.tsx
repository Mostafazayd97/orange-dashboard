import React, { createContext, ReactNode, useReducer } from 'react';

// Define the types for the state and action
interface SidebarState {
    isSidebarOpen: boolean;
}

interface SidebarAction {
    type: 'TOGGLE_SIDEBAR' | 'CLOSE_SIDEBAR';
}

// Create the context with the default value
const SideBarContext = createContext<SidebarState & { toggleSidebar: () => void }>({
    isSidebarOpen: false,
    toggleSidebar: () => {}, // default noop function
});

const sidebarReducer = (state: SidebarState, action: SidebarAction): SidebarState => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return { ...state, isSidebarOpen: !state.isSidebarOpen };
        case "CLOSE_SIDEBAR":
            return { ...state, isSidebarOpen: false };
        default:
            return state;
    }
};
interface SidebarProviderProps {
    children: ReactNode; // Define the type for children
}


// Corrected initial state
const initialState: SidebarState = {
    isSidebarOpen: false,
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(sidebarReducer, initialState);
    
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };

    return (
        <SideBarContext.Provider value={{ ...state, toggleSidebar }}>
            {children}
        </SideBarContext.Provider>
    );
};

export default SideBarContext;
