courseRoster.controller('StudentsCtrl', ['$scope', "$stateParams", "CoursesFactory", "UtilitiesFactory", function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
  $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
  console.log($scope.course);
  $scope.addStudent = function() {

    $scope.course.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };
}]);
