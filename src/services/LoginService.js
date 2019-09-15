import axios from 'axios';
    import { config } from './ConfigService';
export default class LoginService{

    login(login){
        return ( new Promise( resolve => {
            axios.post(config.apiurl + '/login', login, config.headers)
            .then( resp => {
                resolve(resp.data);
            })
            .catch( err => {
                resolve({status: 'ERROR', error: 'Error de conexión'});
            });
        }));
    }

    register(user){
        return ( new Promise( resolve => {
            axios.post(config.apiurl + '/login/register', user, config.headers)
            .then( resp => {
                resolve(resp.data);
            })
            .catch( err => {
                resolve({status: 'ERROR', error: 'Error de conexión'});
            });
        }));
    }

    changePassword(){

    }

}