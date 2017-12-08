var app = angular.module('myApp',["ngRoute"]);

app.run(function($rootScope) {
	$rootScope.mycolor ='blue';
	$rootScope.mybinary=100;
});

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
        template : "main.htm"
    })
    .when("/red", {
        template : "red.htm"
    })
    .when("/green", {
        template : "green.htm"
    })
    .when("/blue", {
        template : "blue.htm"
    });
});


app.directive("myowndirective", function()
{
	return{
		restrict: "EA",
		template:"<div>I myself made this directive</div>"
	};
});