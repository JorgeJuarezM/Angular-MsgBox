#Angular MsgBox

## How to install

```batch
npm install angular-msgbox --save
bower install angular-msgbox --save
```

```html
<script type="text/javascript" src="/bower_components/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="/bower_components/bootstrap/dist/js/bootstrap.js"></script>
<script type="text/javascript" src="/bower_components/angular/angular.js"></script>
<script type="text/javascript" src="/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script type="text/javascript" src="/angular-msgbox.js"></script>
```
```js
angular.module("app", ["msgbox"])
.controller("Controller", function($scope, $msgbox){
    $scope.show = function(){
        $msgbox.show("Hello World")
        .then(function(){
            $msgbox.show("Ok clicked", {
                title: "Success Title"
            });
        }, function(){
            $msgbox.show("Cancel clicked", {
                title: "Cancel Title"
            });
        });
    };
});
```
