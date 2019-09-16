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

    createChannel(){

    }

    deleteChannel(can_id){
        return( new Promise( resolve => {
            axios.delete( config.apiurl + '/channels/delete/' + can_id, config.axios)
                .then(resp => {
                    resolve(resp.data);                    
                })
                .catch(err => {
                    resolve({status:'ERROR', error: 'Ocurrió un error al conectar al servidor'});
                });
        }));
    }

}