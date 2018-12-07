import axios from 'axios';

export default class AuthService {

    constructor(history) {
        this.history = history;
        this.authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
    }

    isAuth() {
        const expiresAt = JSON.parse(localStorage.getItem('expiresIn'));
        return new Date().getTime() < expiresAt;
    }

    signIn(email, password) {
        axios.post(this.authUrl + 'verifyPassword?key=AIzaSyAoMTAGEJASZF8KVCuO65xZcvWyR_Vy-W0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .then((response) => {
                let expiresAt = JSON.stringify(
                    response.data.expiresIn * 1000 + new Date().getTime()
                );

                localStorage.setItem('idToken', response.data.idToken);
                localStorage.setItem('expiresIn', expiresAt);
                localStorage.setItem('refreshToken', response.data.refreshToken);

                this.history.push('/todos');
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    signUp(email, password) {
        axios.post(this.authUrl + 'signupNewUser?key=AIzaSyAoMTAGEJASZF8KVCuO65xZcvWyR_Vy-W0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .then((response) => {
                let expiresAt = JSON.stringify(
                    response.data.expiresIn * 1000 + new Date().getTime()
                );

                localStorage.setItem('idToken', response.data.idToken);
                localStorage.setItem('expiresIn', expiresAt);
                localStorage.setItem('refreshToken', response.data.refreshToken);

                this.history.push('/todos');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    logout(router) {
        localStorage.removeItem('idToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('expiresIn');

        router.history.push('/');
        return null;
    }
}
