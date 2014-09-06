'use strict';

/**
 * @ngdoc function
 * @name devMtnAppApp.controller:PhotoUploadCtrl
 * @description
 * # PhotoUploadCtrl
 * Controller of the devMtnAppApp
 */
angular.module('devMtnAppApp')
  .controller('photoUploadCtrl', ['$scope', '$rootScope', '$location', '$upload', 
  /* Uploading with Angular File Upload */
  function($scope, $rootScope, $location, $upload) {
    $scope.onFileSelect = function($files) {
      var file = $files[0]; // we're not interested in multiple file uploads here
      $scope.upload = $upload.upload({
        url: "https://api.cloudinary.com/v1_1/" + $.cloudinary.config().cloud_name + "/upload",
        data: {upload_preset: $.cloudinary.config().upload_preset, tags: 'myphotoalbum', context:'photo=' + $scope.title},
        file: file
      }).progress(function (e) {
        $scope.progress = Math.round((e.loaded * 100.0) / e.total);
        $scope.status = "Uploading... " + $scope.progress + "%";
        $scope.$apply();
      }).success(function (data, status, headers, config) {
        $rootScope.photos = $rootScope.photos || [];
        data.context = {custom: {photo: $scope.title}};
        $scope.result = data;
        $rootScope.photos.push(data);
        $scope.$apply();
      });
    };

    /* Modify the look and fill of the dropzone when files are being dragged over it */
    $scope.dragOverClass = function($event) {
      var items = $event.dataTransfer.items;
      var hasFile = false;
      if (items != null) {
        for (var i = 0 ; i < items.length; i++) {
          if (items[i].kind == 'file') {
            hasFile = true;
            break;
          }
        }
      } else {
        hasFile = true;
      }
      return hasFile ? "dragover" : "dragover-err";
    };
  }]);
