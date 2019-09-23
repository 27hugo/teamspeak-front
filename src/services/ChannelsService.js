import axios from 'axios';
import { config } from './ConfigService';
export default class ChannelsService{

    getChannels(){

    }

    getChannelById(){

    }

    getChannelsByCliId(cli_id){
        return axios.get( config.apiurl + '/channels/findbycliid/' + cli_id , config.axios);  
    }

    getChannelsBetween(){

    }

    updateChannelName(){

    }

    updateChannelPassword(){

    }

    createChannel(channel){
        return ( new Promise( resolve => {
            axios.post( config.apiurl + '/channels/create', channel, config.axios )
                .then(resp => {
                    resolve(resp.data);                    
                })
                .catch(err => {
                    resolve({status:'ERROR', error: 'Ocurrió un error al conectar al servidor'});
                });
        }));
    }

    deleteChannel(channel_id){
        return( new Promise( resolve => {
            axios.delete( config.apiurl + '/channels/delete/' + channel_id, config.axios)
                .then(resp => {
                    resolve(resp.data);                    
                })
                .catch(err => {
                    resolve({status:'ERROR', error: 'Ocurrió un error al conectar al servidor'});
                });
        }));
    }

}