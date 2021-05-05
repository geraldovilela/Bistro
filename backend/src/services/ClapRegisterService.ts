
interface ClapDTO{
    IdUser:number;
    count:number;
    IdArtigo:String;
}

 class ClapRegisterService {

    async execute({IdArtigo, IdUser, count}:ClapDTO){
        console.log(IdArtigo, IdUser, count);
        return "ok";
    }
 }

 export default new ClapRegisterService();