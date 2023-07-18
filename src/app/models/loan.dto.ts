import { BooKDto } from "./book.dto";
import { CustomerDto } from "./customer.dto";
import { LoanStatus } from "./loanStatus";

export class LoanDto{

	 id:number;
	
     startDate :Date;

	 status:LoanStatus

	 customer:CustomerDto;
    
	 book:BooKDto;

	 constructor(public endDate: Date){}


}