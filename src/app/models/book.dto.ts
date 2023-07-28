import { CategoryDto } from "./category.dto";
import { LoanDto } from "./loan.dto";

export class BooKDto {

	 id:number;

	 stock:number;
	
	 //isAvailable:boolean

	 loanDto:LoanDto[];

	 category:CategoryDto;

    constructor(public title:string, public createdDate:Date, public totalExamp:number, 
		        public author:string) { }
  }