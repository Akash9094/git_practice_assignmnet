	
let count=0;

	function checkPrime(num){
		
	if(num ==1 || num === undefined){
		return false;
	}

	for(let i=2; i<num; i++)

	if(num%i == 0){
		count++;
	}

	}

	if(count>0){

	return false;
	}

	return true;
};

	checkPrime(13);