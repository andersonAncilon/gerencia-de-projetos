export default function verifyAuthentication() {
	if (window.localStorage.getItem('auth')) {
		return true;
	} else {
		return false;
	}
}
