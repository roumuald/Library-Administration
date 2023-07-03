import { CategoryDto } from "./category.dto";
import { LoanDto } from "./loan.dto";

export class BooKDto {

	 id:number;
	
     title:string;
	
	 createdDate:Date;
	
	 totalExamp:number;
	
	 author:string;
	
	 isAvailable:boolean;
	
	 loanDto:LoanDto[];

	 categoryDto:CategoryDto;

    constructor() { }
  }