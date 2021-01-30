
export const toggleDrawer = anchor => {
    // console.log(anchor)
    return {
        type: 'TOGGLE_DRAWER',
        payload: anchor
    }
}