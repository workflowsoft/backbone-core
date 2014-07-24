var Appflow = angular.module("Appflow", [
    'ngSanitize',
    'ngRoute',
 ]);


Appflow.run().controller('IndexController',['$scope',function ($scope) {
    $scope.generateId = function () {
        return (Math.floor(Math.random() * 10000) + '00000').slice(0, 5); 
    };

    $scope.filterElements = function () {
        $scope.data = _.filter($scope.data, function (element) {
            return !(+element.Text % 2);
        });
    };

    $scope.increaseElement = function (element) {
        element.Text = (+element.Text + 1) + '';
    };

    $scope.data = [{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                },{
                    Id: $scope.generateId(),
                    Text: '2',
                    Value: '3'
                }];
}]);