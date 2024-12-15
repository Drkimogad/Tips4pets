// Array to store blog posts (emulating a database)
const blogPosts = [
    {
        title: 'The Majestic Mountains',
        summary: 'Mountains offer some of the most breathtaking views in nature. Let’s explore the beauty of towering peaks.',
        link: '#'
    },
    {
        title: 'Sunset by the Sea',
        summary: 'There’s nothing like the beauty of a sunset over the ocean. Join us as we explore the tranquil waves.',
        link: '#'
    },
    {
        title: 'The Quiet Forest',
        summary: 'Forests are peaceful havens full of life. Let’s take a walk through the forest and enjoy the serenity.',
        link: '#'
    }
];

// Function to render blog posts
function renderBlogPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';  // Clear current posts

    blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        const postSummary = document.createElement('p');
        postSummary.textContent = post.summary;

        const postLink = document.createElement('a');
        postLink.href = post.link;
        postLink.textContent = 'Read more';

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postSummary);
        postDiv.appendChild(postLink);

        postsContainer.appendChild(postDiv);
    });
}

// Function to add new blog post
document.getElementById('add-post-btn').addEventListener('click', function () {
    const title = document.getElementById('post-title').value;
    const summary = document.getElementById('post-summary').value;

    if (title && summary) {
        blogPosts.push({
            title: title,
            summary: summary,
            link: '#'
        });

        renderBlogPosts();
        document.getElementById('post-title').value = '';
        document.getElementById('post-summary').value = '';
    } else {
        alert('Please fill in all fields');
    }
});

// Initial rendering of blog posts
renderBlogPosts();
