import axios from 'axios'

const axiosI = axios.create({
    baseURL: '/api',
    //timeout: 1000

});

export default class ForumController {
    
    //Rutas
    getOne(id){
        return 'cases/'+id+'/';
    }

    getAll(){
        return 'cases/';
    }

    //Funciones
    getQuestion(id){
        return axiosI.get(this.getOne(id));
    }

    getList(){
        return axiosI.get(this.getAll());
    }

    
    //Funciones
    saveQuestion(comment){
        return axiosI.post(this.addCase(comment));
    }

    saveAnswer(rta){
        return axiosI.post(this.addAns(rta));
    }

    //Rutas
    addCase(comment){
        return 'cases/new/'+comment.idUserC+'/'+comment.nameUser+'/'+comment.topicCas+'/'+comment.descripCas+'/'
    }
    addAns(rta){
        return 'answer/new/'+rta.idC+'/'+rta.idUserA+'/'+rta.nameUser+'/'+rta.descripAns+'/'
    }

    
}