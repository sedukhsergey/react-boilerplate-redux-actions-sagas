import { localStorage } from "./index";

export default function logOut() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    window.location.reload();
}