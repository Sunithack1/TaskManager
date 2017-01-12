
var app = angular.module('taskApp', []);

app.controller('taskController', function($scope){
    $scope.taskList = [];
    var taskId = 1;
    $scope.addTask = function() {
            if ($scope.taskName != "") {
                var newTask = {
                    "id": taskId,
                    done: false,
                    "name": $scope.taskName,
                    "status": "pending"
                };
                $scope.taskList.push(newTask);
                //taskId++;
                taskId = $scope.taskList.length + 1;
                $scope.taskName = "";
            }




        };



    $scope.deleteTask = function(index){
        $scope.taskList[index].done = true;
        var currentTaskId =   $scope.taskList[index].id;
        var oldtodo = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(oldtodo, function(todo){
            if(!todo.done){
                if(todo.id > currentTaskId){
                    todo.id = todo.id - 1;
                }
                $scope.taskList.push(todo);
            }
        });
       // if($scope.taskList.length < 1){
           // taskId = 1;
        //}
        taskId = $scope.taskList.length + 1;
    };

$scope.changeStatus = function(index){
    $scope.taskList[index].status = "Completed";
};


});



/*
 function customersController($scope,$http) {
 $http.get('dummy_data.json')
 .success(function(response) {$scope.employees = response.employees;});
 }
 */
