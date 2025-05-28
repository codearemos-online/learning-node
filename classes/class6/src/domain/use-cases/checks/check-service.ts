interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>
}

type successCallback = () => void;
type errorCallback = (error:string) => void;

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly successCallback:successCallback,
        private readonly errorCallback:errorCallback
    ){}

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url)
            if (!req.ok) throw new Error(`Error on check service ${url}`)
            this.successCallback();
            return true;
        } catch (error) {
            this.errorCallback(`Error en servidor`)
            return false;
        }
    }
}