export class CreateCategoryDto{
    private constructor(
        public readonly name:string,
        public readonly available:string
    ){}

    static create(object:{[key:string]:any}):[string?,CreateCategoryDto?]{
        const { name,available = false } = object;
        if(!name) return ['name is required'];

        return [undefined,new CreateCategoryDto(name,available)];
    }
}