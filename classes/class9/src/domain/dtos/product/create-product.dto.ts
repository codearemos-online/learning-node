export class CreateProductDto {
    private constructor(
        public readonly name:string,
        public readonly available:boolean,
        public readonly price:number,
        public readonly description:string,
        public readonly category:string,
        public readonly user:string
    ){}
    static create(object:{[key:string]:any}):[string?,CreateProductDto?]{
        const { name,available = true,price,description,category,user } = object;
        if(!name) return ['name is required'];
        if(!price) return ['price is required'];
        if(!description) return ['description is required'];
        if(!category) return ['category is required'];
        if(!user) return ['user is required'];

        return[undefined, new CreateProductDto(name,available,price,description,category,user)];
    }
}