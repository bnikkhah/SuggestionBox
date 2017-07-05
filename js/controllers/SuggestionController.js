app.controller("SuggestionController", ["$scope", "$routeParams", "suggestions", function($scope, $routeParams, suggestions) {

    $scope.post = suggestions.posts[$routeParams.id];
	
    $scope.addComment = function(){
        if(!$scope.myComments || $scope.myComments === "" ){
            return;
        }
		
        $scope.post.comments.push({
            body:$scope.myComments,
            upvotes:0,
        });
		
        $scope.myComments = "";
    };
	
    $scope.upvoteComments = function(comment){
        comment.upvotes += 1;
    };

 }]);