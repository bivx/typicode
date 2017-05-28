app.controller("view1Ctrl", function($scope, $http, $state) {

  "use strict";

  $http.get('http://jsonplaceholder.typicode.com/posts')
    .then(function(e) {
      if (e.status === 200) {
        $scope.totalItems = e.data;
        $scope.pageNumber = Number((e.data.length / 5).toFixed());
      }
    });


  $scope.getParams = function(e) {
    $state.go("view2", {
      id: e.id,
      userID: e.userId
    });
  };

  $scope.page = 1;

});
