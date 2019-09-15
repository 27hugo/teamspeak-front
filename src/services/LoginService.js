import axios from 'axios';
import { config } from './ConfigService';
import jwt from 'jsonwebtoken';
export default class LoginService{

    login(login){
        return ( new Promise( resolve => {
            axios.post(config.apiurl + '/login', login, config.axios)
            .then( resp => {
                if(resp.data.status === 'OK'){
                    var user = jwt.decode(resp.data.data);
                    localStorage.setItem('logueado', true);
                    localStorage.setItem('token', resp.data.data);
                    localStorage.setItem('user', JSON.stringify(user) );
                   
                }
                resolve(resp.data);
            })
            .catch( err => {
                resolve({status: 'ERROR', error: 'Error al conectar con el servidor'});
            });
        }));
    }

    register(user){
        return ( new Promise( resolve => {
            axios.post(config.apiurl + '/login/register', user, config.axios)
            .then( resp => {
                resolve(resp.data);
            })
            .catch( err => {
                resolve({status: 'ERROR', error: 'Error al conectar con el servidor'});
            });
        }));
    }

    changePassword(){

    }

}