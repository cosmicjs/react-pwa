import config from './../config/config';
import axios from 'axios';

const authentication = {

    login(email)
    {
        return axios.get(config.url+config.bucket_slug+"/object-type/admins/search",{
            params:{
                metafield_key: 'email',
                metafield_value: email,
                limit: 1,
                read_key: config.read_key
            }
        })
    }
}

export default authentication;