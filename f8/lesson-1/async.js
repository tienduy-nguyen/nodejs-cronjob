//Nhac qua ve callback, Promise va Async
api.getUser('sun_user', function(err, user) {
    if (err) throw err
    api.getPostsOfUser(user, function(err, posts) {
      if (err) throw err
      api.getCommentsOfPosts(posts, function(err, comments) {
        // bla bla bla...
      });
    });
  });

//promise
api.getUser('sun_user')
.then( user => {
    api.getPostsOfUser(user);
})
.then(posts =>{
    api.getCommentsOfPosts(posts);
})
.catch( err =>{
    console.log(err);
})

api.getUser = (username)  => {
    return new Promise((resolve,reject) =>{
        //Gui Ajax request
        http.get(`/users/${username}`,(err,result) =>{
            if(err) return reject(err);
            resolve(result);
        })
    })
}

//Async
async function() {
    try {
        const user = await api.getUser('sun_user');
        const posts = await api.getPostsOfUser(user);
        const comments = await api.getCommentsOfPosts(posts);
        console.log(comments)
    } catch (error) {
        console.log(error)
    }
}


//1 ung dung hay cua reduce 
[promise1, promise2, promise3].reduce(function(currentPromise, promise) {
    return currentPromise.then(promise);
  }, Promise.resolve());
  
  // Đoạn ở trên khi được viết dài dòng ra
  Promise.resolve().then(promise1).then(promise2).then(promise3);