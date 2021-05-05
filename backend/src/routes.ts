import {Request, Response} from 'express';
import ClapRegisterService from './services/ClapRegisterService'



export async function RegisterClap(request:Request, response:Response ){
    const {IdUser, count, IdArtigo} = request.body;
    
    const clap= await ClapRegisterService.execute({IdUser,count, IdArtigo});

    return response.status(200).json(clap);
}