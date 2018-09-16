/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

	var countLoverTriangles = 0;
	var otherSpichonees = [];

		for (var i = 0; i < preferences.length; i++) {
			if (i!== preferences[i]-1){
			    var aSpichonee = preferences[i]-1;
	 		    var bSpichonee = preferences[aSpichonee]-1;
	 		    var cSpichonee = preferences [bSpichonee]-1;

	    		if (cSpichonee == i && otherSpichonees.includes(cSpichonee) === false){  
	    		 
	    		otherSpichonees.push(aSpichonee);
	     		otherSpichonees.push(bSpichonee);
	    		countLoverTriangles++; 
	   		 }
		}
	}
    return countLoverTriangles
  // your implementation
};
