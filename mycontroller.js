// a sample controller
app.controller('myctrl',function($scope,$location,$timeout,$interval,myownservice,$http){
	$scope.name = "yeshu";
	$scope.defaultcolor = "lightblue";
	$scope.myfriendsarray=['venu','subbu','prudhvi'];
	$scope.mydetails=[{"name":"yeshu"},
		{"name":"sai"},
		{"name":"melpati"}];
		
	$scope.selection="none";	
	$scope.email="";
	$scope.likes =0;
	$scope.plusOne = function() {
			this.likes = this.likes+1;
	};
	$scope.myUrl = $location.absUrl();		
	$scope.alertme = function() {
		window.alert("Hi! there .how are you?");
	};
	$scope.mymessage="Hi every one";
	$timeout(function () {
        $scope.mymessage = "How are you today?";
    }, 2000);
	$scope.mytime = new Date().toLocaleString();
	$interval(function(){
		$scope.mytime = new Date().toLocaleString();
	},1000);

	$http.get("http://ip.jsontest.com/").then(function(response){
		$scope.myjsondatahttp = [ {"data": response.data,"status":response.status}]; 
	});
	$scope.serviceName = myownservice.setname("Yeshu");
 
	

	
});
// the following is a service
app.service("myownservice",function() {
	
	this.binaryfunc = function(value) {
		return value.toString(2);
	};
	this.name="";
	this.setname = function(value) {
		this.name =  value;
		return this.name;
	}
});


 //configuring provider
app.filter('mybinaryconvert',['myownservice',
function(myownservice) {
	return function(x) {
		return myownservice.binaryfunc(x);
	};
}]);


app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(2);
    }
});
app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);
