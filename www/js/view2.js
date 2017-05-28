app.controller('view2Ctrl', function($scope, $http, $stateParams) {

  "use strict";

  const id = $stateParams.id;
  const userID = $stateParams.userID;

  $http.get('http://jsonplaceholder.typicode.com/users?id=' + userID)
    .then(function(e) {
      if (e.status === 200) {
        $scope.userName = e.data;
      }
    });

  $http.get('http://jsonplaceholder.typicode.com/posts/' + id + '/comments')
    .then(function(e) {
      if (e.status === 200) {
        $scope.comments = e.data;
      }
    });

  $http.get('http://jsonplaceholder.typicode.com/posts/' + id)
    .then(function(e) {
      if (e.status === 200) {
        $scope.post = e.data;
      }
    });

});
