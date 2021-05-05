import { Clap } from "../Model/Clap";

interface ClapDTO {
    IdUser: number;
    count: number;
    IdArtigo: String;
}

class ClapRegisterService {

    async execute({ IdArtigo, IdUser, count }: ClapDTO) {
        const clap = new Clap({
            IdArtigo, 
            IdUser,
            count
        });
        return clap;
    }
}

export default new ClapRegisterService();