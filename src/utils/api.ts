export const getAuthRequestHeader = (token:string) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
})