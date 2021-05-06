import  Clap  from "../Model/Clap";
import {EntityRepository, getRepository, Repository} from 'typeorm';

interface ICreateClapDTO {
    IdUser:number;
    count:number;
    IdArtigo: string;
}

@EntityRepository(Clap)
export default class ClapRepository extends Repository<Clap> {
        
} 