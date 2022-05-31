type Size = '' | 'S' | 'M' | 'XL'
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady():boolean {
        for (const key in this) {
            const property = this[key]
            switch (typeof this[key]) {
                case 'string':
                    if((<string><unknown>property).length <= 0) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if((<number><unknown>property) <= 0) throw new Error(`${key} is 0`);
                    break;
                default:
                    throw new Error(`${key} is not valid`);
            }

        }
        return true
    }

    toString(){
        if(!this.isProductReady()) return 

        return `${this.name} (${this.price}), ${this.size}`
    }

}

(()=>{
    const bluePants = new Product();
    console.log(bluePants.toString())
})()