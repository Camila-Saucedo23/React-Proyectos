
import { API_RM } from './../constants/Api.contants';

class RMService{

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
         return response.json();    
    }
    async getCharactersById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
         return response.json();    
    }

}

export default new RMService();