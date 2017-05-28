app.controller("view3Ctrl", function($scope, $http) {

  "use strict";

  $scope.user = {};

  const data = $scope.user;
  $scope.messageSuccess = false;
  $scope.sent = function() {
    $http.post('http://jsonplaceholder.typicode.com/posts', data)
      .then(function(e) {
        if (e.status === 201) {
          $scope.messageSuccess = true;
          $scope.message = "Post został dodany pomyślnie"
        }
      });
  };
});
