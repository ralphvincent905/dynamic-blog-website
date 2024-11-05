    function getPosts() {
        return JSON.parse(localStorage.getItem('posts')) || [];
  }
  
    function savePosts(posts) {
        localStorage.setItem('posts', JSON.stringify(posts));
  }
  
    function displayPosts() {
        const posts = getPosts();
        const container = document.getElementById('posts-container');
        container.innerHTML = '';
        posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="post.html?id=${index}">View/Edit Post</a>`;
        container.appendChild(postDiv);
    });
  }
  
    function createPost(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        
        const posts = getPosts();
        posts.push({ title, content });
        savePosts(posts);
    
        window.location.href = 'index.html';
  }
  
  function loadPost() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    const posts = getPosts();
    
    if (postId !== null && posts[postId]) {
      document.getElementById('title').value = posts[postId].title;
      document.getElementById('content').value = posts[postId].content;
    } else {
      alert('Post not found!');
      window.location.href = 'index.html';
    }
  }
  
  function updatePost(event) {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    const posts = getPosts();
    if (postId !== null && posts[postId]) {
      posts[postId] = { title, content };
      savePosts(posts);
      alert('Post updated!');
      window.location.href = 'index.html';
    }
  }
  
  function deletePost() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    
    const posts = getPosts();
    if (postId !== null && posts[postId]) {
      posts.splice(postId, 1);
      savePosts(posts);
      alert('Post deleted!');
      window.location.href = 'index.html';
    }
  }
  