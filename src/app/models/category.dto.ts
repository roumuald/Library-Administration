import { BooKDto } from "./book.dto";

export class CategoryDto{

	 id: number
	 
	 book:BooKDto[];

	 constructor(public code:string, public label:string){}
}