import { BooKDto } from "./book.dto";

export class CategoryDto{

	 id: number
	 
	 bookDto:BooKDto[];

	 constructor(public code:string, public label:string){}
}