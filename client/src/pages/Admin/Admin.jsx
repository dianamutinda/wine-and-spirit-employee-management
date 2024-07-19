import Approve from "./Approve"
const Admin = () =>{
    return(
        <>
        <Route path="/admin/approve" element={<Approve/>}/>
        </>
    )
}
export default Admin