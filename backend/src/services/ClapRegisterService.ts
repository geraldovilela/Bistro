import { getCustomRepository } from "typeorm";
import ClapRepository from '../Repository/ClapRepository'
interface ClapDTO {
    IdUser: number;
    count: number;
    IdArtigo: string;
}

class ClapRegisterService {
   
    async execute({ IdArtigo, IdUser, count }: ClapDTO) {
        const ClapRepo = getCustomRepository(ClapRepository);
        const resp = ClapRepo.create({
            IdArtigo, IdUser, count
        })
        await ClapRepo.save(resp);
        return resp;
    }
}

export default new ClapRegisterService();