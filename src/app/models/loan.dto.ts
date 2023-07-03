import { BooKDto } from "./book.dto";
import { CustomerDto } from "./customer.dto";
import { LoanStatus } from "./loanStatus";

export interface LoanDto{

	 id:number;
	
     startDate :Date;
	
	 endDate: Date;

     status:LoanStatus;
	
	 customerDto:CustomerDto;
    
	 bookDto:BooKDto;


}