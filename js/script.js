document.addListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        // Simulate sending the message
        responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
  
        // Clear the form
        contactForm.reset();
      });
    }
  
    // Simulate fetching blog posts
    const blogPosts = [
      {
        title: "First Blog Post",
        content: "This is the content of the first blog post."
      },
      {
        title: "Second Blog Post",
        content: "This is the content of the second blog post."
      }
    ];
  
    if (document.getElementById('posts')) {
      const postsContainer = document.getElementById('posts');
  
      blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postsContainer.appendChild(postDiv);
      });
    }
  });
  