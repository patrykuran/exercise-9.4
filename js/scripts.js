function drawTree(x) {
	for(var i=1; i<=x; i++) {
		var star='';
		for(var k=x; k>=i+1; k--) {
			star+=" ";
		};
		for(var j=0; j<(2*i-1); j++) {
			star+='*';
			};
		console.log(star);
	};
};

drawTree(10);


/* choinka bez wyśrodkowania 

function drawTree(x) {
	for(var i=0; i<=x; i++) {
		var star='';
		for(var j=0; j<i; j++) {
			star+='*';
		};
		console.log(star);
	};
};

drawTree(5);

*/


/* odwrócona choinka

function drawTree(x) {
	for(var i=0; i<=x; i++) {
		var star='';
		for(var j=i; j<x; j++) {
			star+='*';
		};
	console.log(star);
	};
};

*/
