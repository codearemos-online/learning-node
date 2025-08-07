export class CreateCategoryDto{
    private constructor(
        private readonly name:string,
        private readonly available:string
    ){}

    static create(object:{[key:string]:any}):[string?,CreateCategoryDto?]{
        const { name,available = false } = object;
        if(!name) return ['name is required'];

        return [undefined,new CreateCategoryDto(name,available)];
    }
}