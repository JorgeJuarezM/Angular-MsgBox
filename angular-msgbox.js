angular.module("msgbox", ["ui.bootstrap"])
.factory("$msgbox", function($rootScope, $modal, $q){
    var success_tpl = '<div class="modal-header" data-ng-show="{{title.length}}"> <h4 class="modal-title">{{title}}</h4></div><div class="modal-body" style="font-size: 18px">{{message}}</div><div class="modal-footer"> <button class="btn btn-primary" data-ng-click="ok($event)">Ok</button> <button class="btn btn-default" data-ng-click="cancel($event)">Cancel</button></div>';
    
    var scope = $rootScope.$new();
    
    return {
        show: function(msg, opts){
            var defer = $q.defer();
            opts = opts || {};
            
            $modal.open({
                template: success_tpl,
                scope: scope,
                controller: function($scope, $modalInstance){
                    $scope.title = opts.title;
                    $scope.message = msg;
                    
                    $scope.ok = function($event){
                        $event.preventDefault();
                        $modalInstance.close();
                        defer.resolve();
                    };
                    $scope.cancel = function($event){
                        $event.preventDefault();
                        $modalInstance.close();
                        defer.reject();
                    };
                },
                size: "sm",
                backdrop: "static",
                keyboard: false
            });
            return defer.promise;
        }
    }    
});