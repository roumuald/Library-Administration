import { LoanDto } from "./loan.dto";

export class CustomerDto{

	id:number;
	
    firstName: string;
	
	lastName: string;
	
	job: string ;

	email:string ;	
	
	adress: string;
	
	createdDate: Date;
	
	loanDto:LoanDto[];

}