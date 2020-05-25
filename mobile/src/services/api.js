import axios from 'axios';

const api = axios.create({
    //  Qunado usar o axios passar a url do localhost aberto na execução
    baseURL: 'http://192.168.15.123:3333'
});

export default api; 