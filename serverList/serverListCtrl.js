angular.module('ServerList', [])
  .controller('ServerListCtrl', ['$scope', '$mdBottomSheet', function($scope, $mdBottomSheet) {
    
    var _this = this;

    this.showBottomSheet = function($event, index) {
      $mdBottomSheet.show({
        templateUrl: '/u/213392662/OSCDashboards/serverList/serverListBottomSheet.html',
        controller: 'ServerListBottomSheetCtrl',
        targetEvent: $event, 
        locals: {
          thisServer: _this.servers[index]
        }
      });
    };

    this.serverStatusImg = function(index) {
      if(this.servers[index].status == 'ok'){
        return { "background": "url(/u/213392662/OSCDashboards/img/server-ok.png) no-repeat", "background-size": "cover" };
      } else if(this.servers[index].status == 'warn') {
        return { "background": "url(/u/213392662/OSCDashboards/img/server-warn.png) no-repeat", "background-size": "cover" };
      } else if(this.servers[index].status == 'err'){
        return { "background": "url('/u/213392662/OSCDashboards/img/server-err.png') no-repeat", "background-size": "cover" };
      } 
    };

    this.servers = [
      {
        name: "Server One",
        host: "uatfms.amsoscar.com",
        roles: "Full Stack + Clips",
        ip: "76.120.70.39",
        uptime: "36d 8h 29m",
        diskUsage: "38%",
        status: "ok",
        modules: [
          {
            moduleName: "module name 1", 
            executions: [
              {execId: 1433276102578, status: 'OK', steps: [
                {label: 'Create Media Directories', status: 'OK', tasks: [
                  {id: 'fileManager', status: 'OK', error: 'This is the task error output - its very informative, right?'}
                ]},
                {label: 'Live Encode', status: 'OK', tasks: [
                  {id: 'encoder', status: 'OK', error: 'This is the task error output - its very informative, right?'},
                  {id: 'nttpNotifier', status: 'OK', error: 'This is the task error output - its very informative, right?'}
                ]},
                {label: 'Upload Stream and Create Spritesheet', status: 'OK', tasks: [
                  {id: 'fileManager', status: 'OK', error: 'This is the task error output - its very informative, right?'},
                  {id: 'imageProcessor', status: 'OK', error: 'This is the task error output - its very informative, right?'},
                  {id: 'httpNotifier', status: 'OK', error: 'This is the task error output - its very informative, right?'}
                ]},
                {label: 'Upload VTT', status: 'OK', tasks: [
                  {id: 'encoder', status: 'OK', error: 'This is the task error output - its very informative, right?'},
                  {id: 'nttpNotifier', status: 'OK', error: 'This is the task error output - its very informative, right?'}
                ]},
                {label: 'Upload Thumbnails', status: 'OK', tasks: [
                  {id: 'fileManager', status: 'OK', error: 'This is the task error output - its very informative, right?'},
                  {id: 'imageProcessor', status: 'OK', error: 'This is the task error output - its very informative, right?'},
                  {id: 'httpNotifier', status: 'OK', error: 'This is the task error output - its very informative, right?'}
                ]},
                {label: 'Upload Thumbnails', status: 'OK', tasks: [
                  {id: 'encoder', status: 'OK', error: 'This is the task error output - its very informative, right?'},
                  {id: 'nttpNotifier', status: 'OK', error: 'This is the task error output - its very informative, right?'}
                ]}
              ]},
              {execId: 1433276141541, status: 'OK'},
              {execId: 1433276104647, status: 'OK'},
              {execId: 1433276102578, status: 'OK'},
            ]
          },
          {
            moduleName: "module name 2", 
            executions: [
              {execId: 1433276102578, status: 'OK'},
              {execId: 1433276141541, status: 'OK'},
              {execId: 1433276104647, status: 'OK'},
              {execId: 1433276102578, status: 'OK'},
            ]
          },
          {
            moduleName: "module name 3", 
            executions: [
              {execId: 1433276102578, status: 'OK'},
              {execId: 1433276141541, status: 'OK'},
              {execId: 1433276104647, status: 'OK'},
              {execId: 1433276102578, status: 'OK'},
            ]
          },
          {
            moduleName: "module name 4", 
            executions: [
              {execId: 1433276102578, status: 'OK'},
              {execId: 1433276141541, status: 'OK'},
              {execId: 1433276104647, status: 'OK'},
              {execId: 1433276102578, status: 'OK'},
            ]
          },
          {
            moduleName: "module name 5", 
            executions: [
              {execId: 1433276102578, status: 'OK'},
              {execId: 1433276141541, status: 'OK'},
              {execId: 1433276104647, status: 'OK'},
              {execId: 1433276102578, status: 'OK'},
            ]
          },
          {
            moduleName: "module name 6", 
            executions: [
              {execId: 1433276102578, status: 'OK'},
              {execId: 1433276141541, status: 'OK'},
              {execId: 1433276104647, status: 'OK'},
              {execId: 1433276102578, status: 'OK'},
            ]
          },
          {
            moduleName: "module name 7", 
            executions: [
              {execId: 1433276102578, status: 'OK'},
              {execId: 1433276141541, status: 'OK'},
              {execId: 1433276104647, status: 'OK'},
              {execId: 1433276102578, status: 'OK'},
            ]
          }
        ]
      },
      {
        name: "Server Two",
        host: "uatfms.amsoscar.com",
        roles: "Live Encode",
        ip: "76.120.70.39",
        uptime: "36d 8h 29m",
        diskUsage: "38%",
        status: 'err'
      },
      {
        name: "Server Three",
        host: "uatfms.amsoscar.com",
        roles: "Full Stack + Clips",
        ip: "76.120.70.39",
        uptime: "36d 8h 29m",
        diskUsage: "38%",
        status: "ok"
      },
      {
        name: "Server Four",
        host: "uatfms.amsoscar.com",
        roles: "Clips",
        ip: "76.120.70.39",
        uptime: "36d 8h 29m",
        diskUsage: "38%",
        status: "err"
      },
      {
        name: "Server Five",
        host: "uatfms.amsoscar.com",
        roles: "Full Stack + Clips + Live Encode",
        ip: "76.120.70.39",
        uptime: "36d 8h 29m",
        diskUsage: "38%",
        status: "ok"
      },
      {
        name: "Server Six",
        host: "uatfms.amsoscar.com",
        roles: "Full Stack + Clips",
        ip: "76.120.70.39",
        uptime: "36d 8h 29m",
        diskUsage: "38%",
        status: "warn"
      },
      {
        name: "Server Seven",
        host: "uatfms.amsoscar.com",
        roles: "Full Stack",
        ip: "76.120.70.39",
        uptime: "36d 8h 29m",
        diskUsage: "38%",
        status: "err"
      }
    ];
  
  }])
  .controller('ServerListBottomSheetCtrl',['$scope', '$mdBottomSheet', '$mdDialog', 'thisServer', 
    function($scope, $mdBottomSheet, $mdDialog, thisServer) {
    
    $scope.server = thisServer;
    $scope.thisModule = $scope.server.modules[0];

    $scope.closeBottomSheet = function() {
      $mdBottomSheet.hide();
    }

    $scope.selectModule = function(index) {
      $scope.thisModule = $scope.server.modules[index];
      $scope.thisExecution = undefined;
      $scope.thisStep = undefined;
      $scope.thisTask = undefined;
    };

    $scope.selectExecution = function(index) {
      $scope.thisExecution = $scope.thisModule.executions[index];
      $scope.thisStep = undefined;
      $scope.thisTask = undefined;
    };

    $scope.selectStep = function(index) {
      $scope.thisStep = $scope.thisExecution.steps[index];
      $scope.thisTask = undefined;
    };

    $scope.showTaskDetails = function(event, index) {
      $scope.thisTask = $scope.thisStep.tasks[index];

      $mdDialog.show({
        controller: 'TaskStatusModalCtrl',
        templateUrl: '/u/213392662/OSCDashboards/serverList/taskStatusModal.html',
        parent: angular.element(document.body),
        targetEvent: event,
        locals: {
          thisTask: $scope.thisTask
        }
      });
    };


    // $scope.smallServerStatusImg = function() {
    //   if($scope.server.status == 'ok'){
    //     return '/u/213392662/OSCDashboards/img/server-ok-sm.png';
    //   } else if($scope.server.status == 'warn') {
    //     return '/u/213392662/OSCDashboards/img/server-warn-sm.png';
    //   } else if($scope.server.status == 'err'){
    //     return '/u/213392662/OSCDashboards/img/server-err-sm.png';
    //   } 
    // }

  }])
  .controller('TaskStatusModalCtrl',['$scope', '$mdDialog', 'thisTask', 
    function($scope, $mdDialog, thisTask) {

      $scope.thisTask = thisTask;

      $scope.closeTaskDetails = function() {
        $mdDialog.hide();
      };

  }])
  .directive('serverList', function() {
    return {
       scope: {},
       templateUrl: '/u/213392662/OSCDashboards/serverList/serverListTpl.html',
       replace: true,
       controller: 'ServerListCtrl',
       controllerAs: 'serverListCtrl'
    };
});