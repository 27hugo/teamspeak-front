import axios from 'axios';
import { config } from './ConfigService';
export default class ClientsService{

    getClients(){

    }

    getClientsOnline(){

    }

    getClientById(cli_id){
        return axios.get( config.apiurl + '/clients/find/' + cli_id, config.axios ); 
    }

    updateClient(client){
        return ( new Promise( resolve => {
            axios.put( config.apiurl + '/clients/update', client, config.axios )
                .then(resp => {
                    resolve(resp.data);                    
                })
                .catch(err => {
                    resolve({status:'ERROR', error: 'Ocurrió un error al conectar al servidor'});
                });
        }));
    }

    deleteClient(){

    }

    getLastConnections(cli_id){
        return axios.get( config.apiurl + '/clients/connection/' + cli_id , config.axios );
    }

    getLoginsPerMonth(){
        const date = new Date();
        return axios.get( config.apiurl + '/clients/connectionpermonth/' + date.getFullYear() + '/' + (date.getUTCMonth() + 1), config.axios);
    }

    getTotalClients(){
        return axios.get( config.apiurl + '/clients/total_clients', config.axios );
    }

}