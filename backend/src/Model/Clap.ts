
class Clap {
    IdUser: number;
    count: number;
    IdArtigo: String

    constructor({ IdArtigo, IdUser, count }: Clap) {
        this.IdUser = IdUser;
        this.count = count
        this.IdArtigo = IdArtigo;
    }
}

export { Clap };