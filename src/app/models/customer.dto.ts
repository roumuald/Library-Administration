import { LoanDto } from "./loan.dto";

export class CustomerDto{

	id:number;
	
	createdDate: Date;

	constructor(public firstName:string, public lastName:string, public job:string, public email:string, public adress:string){}
	
	loanDto:LoanDto[];

}