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
                    localStorage.setItem('email', user.email );
                    localStorage.setItem('id', user.id);
                    /*console.log("Son las         "+Math.floor(new Date().getTime() / 1000));
                    console.log("Creado a las    "+user.iat);
                    console.log("Expira a las    "+user.exp);
                    console.log("Tiempo de token "+(user.exp-user.iat));*/
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

    changePassword(user){
        return ( new Promise( resolve => {
            axios.put(config.apiurl + '/login/changepassword', user, config.axios)
            .then( resp => {
                resolve(resp.data);
            })
            .catch( err => {
                resolve({status: 'ERROR', error: 'Error al conectar con el servidor'});
            });
        }));
    }

}