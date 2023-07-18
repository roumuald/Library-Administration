import { CategoryDto } from "./category.dto";
import { LoanDto } from "./loan.dto";

export class BooKDto {

	 id:number;

	 loanDto:LoanDto[];

	 category:CategoryDto;

    constructor(public title:string, public createdDate:Date, public totalExamp:number, public author:string, public isAvailable:boolean ) { }
  }