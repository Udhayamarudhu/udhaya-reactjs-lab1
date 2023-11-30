import axios from 'axios';
import iDataList from '../model/iDataList';

const getDataFromServer = () => {
    return axios.get<iDataList[]>('http://localhost:3000/items')
    .then(res =>res.data)
    
}

const pushDataToServer = (newExpense :Omit<iDataList, 'id'>) => {
    return axios.post<iDataList>('http://localhost:3000/items',
     newExpense,
     {
        headers:{
            'Content-Type': 'application/json'
        }

    }
    ).then(res => res.data)
};

export {
    getDataFromServer, pushDataToServer
}