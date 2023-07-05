import { BooKDto } from "./book.dto";
import { CustomerDto } from "./customer.dto";
import { LoanStatus } from "./loanStatus";

export class LoanDto{

	 id:number;
	
     startDate :Date;
	 
	 customerDto:CustomerDto;
    
	 bookDto:BooKDto;

	 constructor(public endDate: Date, public status:LoanStatus){}


}