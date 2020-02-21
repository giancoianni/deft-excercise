export class Item {
    name:string;
    regularPrice: number;
    memberPrice: number;
    taxable: boolean;
    constructor(name:string, regularPrice: number, memberPrice: number, taxStatus: "Taxable" | "Tax-Exempt"){
        this.name = name;
        this.regularPrice = regularPrice;
        this.memberPrice = memberPrice;
        this.taxable = taxStatus==="Taxable";
    }
}