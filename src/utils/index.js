export { default as history } from './history';

export function logOut() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    window.location.reload();
}

export { default as localStorage } from './localStorage';
