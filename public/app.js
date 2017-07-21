(function(){
  angular
    .module("blogApp",[])
    .controller("BlogController",BlogController);

    function BlogController($scope,$http){
      $scope.createPost=createPost;
      $scope.deletePost=deletePost;
      $scope.editPost=editPost;

      function init(){
      getAllPosts();
       }
    init();

    function editPost(postId){
        $http.get("/api/blogpost/"+postId)
              .then(
                function(post)
                {
                  $scope.post=post;
                },
                function(err){

                }
              );
    }
    function deletePost(postId)
    {
      $http.delete("/api/blogpost/"+postId)
           .then(
              function(success)
                {getAllPosts();
                },
                function(err){

                }

      );

    }

      function getAllPosts(){
        $http
            .get("/api/blogpost")
            .then(
              function(post)
            {
                $scope.posts=post.data;
                console.log(post.data);
            },
              function(err)
            {
              console.log(400);

            });

      }

      function createPost(post){

        $http.post("/api/blogpost",post)
              .then(
                function(success)
                {getAllPosts();
              },
                function(err){

                }

              );

       }

    }
})();
