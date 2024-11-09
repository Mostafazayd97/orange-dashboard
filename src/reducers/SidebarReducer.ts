interface SidebarState {
    isSidebarOpen: boolean;
}

interface SidebarAction {
    type: 'TOGGLE_SIDEBAR' | 'CLOSE_SIDEBAR'; // action types
    // If needed, you can add a payload field for other actions.
    // payload?: any; 
}


const sidebarReducer = (state:SidebarState, action:SidebarAction) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            }
        case "CLOSE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: false
            }
        default:
            return state
    }
}
export default sidebarReducer