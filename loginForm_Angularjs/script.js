var app = angular.module("myApp",[]);

//custom/user defined directive as ng-model doesn't support file< input >
//let fileArray = document.querySelector('input[type="file"]').files; // using pure js
app.directive("fileModel",function($parse){
    return{
        restrict: "A",          // Apply this directive as an attribute
        link: function(scope,element,attrs) {
            let model = $parse(attrs.fileModel);  // Get the model from the attribute
            element.bind("change",function(event){// When a file is selected, update the model with the selected file
                let selectedFile = event.target.files[0];
                scope.$apply(function(){ model.assign(scope,selectedFile); });
            });
        }
    };
});

app.controller("myController",function($scope){
    $scope.form = { boolShowForm : false };
    $scope.user = {
        name: null,
        roll: null,
        email: null,
        file: null             
        //formData
    };
    $scope.arr = [];
    
    $scope.save = function() {
        $scope.arr.push($scope.user)
        console.log("$scope.arr : ",$scope.arr);
        $scope.user = new Object();                 //We know,we need to reset the obj after pushing into array
        $scope.reset();                             //reset the entire form
    }

    $scope.reset = function() {     //There are 3 ways to reset html form
        document.getElementById("myForm").reset();      //inbuilt js function             
        // $scope.user = new Object(); //resets the user object and thus resets all ng-model except file input
        //$scope.user = {};   //assigning empty object which also resets the user object and thus resets all ng-model
        }          
    $scope.show = function(index) {
        $scope.user = $scope.arr[index];
        console.log("show : ",$scope.user);     //file is not reflecting on input tag ?       
    }
});