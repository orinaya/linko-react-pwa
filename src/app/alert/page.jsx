import ProtectedRoute from "@/components/layout/ProtectedRoutes";
import LogoutButton from "@/components/Logout";

function Alert() {
  return (<>
    {/* <ProtectedRoute> */}
    <h1>Alerte</h1>
    <LogoutButton />
    {/* </ProtectedRoute> */}
  </>);
}

export default Alert;