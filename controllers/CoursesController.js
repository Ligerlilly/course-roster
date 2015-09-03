courseRoster.controller('CoursesCtrl', ['$scope', 'CoursesFactory', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory
}]);
