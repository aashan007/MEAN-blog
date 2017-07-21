(function(){
  angular
    .module("blogApp",[])
    .controller("BlogController",BlogController);

    function BlogController($scope,$http){
      $scope.createPost=createPost;

      function init(){
      getAllPosts();
       }
    init();

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
