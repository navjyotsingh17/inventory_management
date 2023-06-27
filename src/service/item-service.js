import axios from "axios";


const API_URL="http://localhost:8080/api";


class ItemService{

    createItem(item){
        return axios.post(API_URL +"/createItem",item);
    }

    getAllItems(){
        return axios.get(API_URL + "/getAllItems");
    }

    getItemByName(name){
        return axios.get(API_URL +"/getItemByName?name={name}" +name);
    }

    getItemById(id) {
        return axios.get(API_URL + "/getItemById/"+ id);
    }

    deleteItemById(id){
        return axios.delete(API_URL + "/deleteItemById/"+ id);
    }

    updateItem(item){
        return axios.put(API_URL + "/updateItem/"+ item.id, item);
    }

}

export default new ItemService();