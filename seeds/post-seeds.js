const { Post } = require('../models');
const postData = [
    {
        title: "New wireframe software!",
        post_content: "Brand new wireframe software created! Easier and better than ever!",
        user_id: 3
    },
    {
        title: "Tech blog released!",
        post_content: "A new tech blog similiar to a Wordpress site has now been released to the public! This site allows users to create and delete posts, along with commenting on others. This site makes everything in your life easier!!",
        user_id: 1
    },
    {
        title: "README maker made public!",
        post_content: "A new README generator has just been made public! This site makes creating a well made README easy and fun to do! It's as simple as answering some questions and watching the magic happen.",
        user_id: 2
    },
    {
        title: "New news about visual studio code",
        post_content: "Some new news about VSC has been released. Some changes are to be implemented soon and it looks like VSC is going to be able to make things bigger, better, and easier overall!",
        user_id: 5
    },
    {
        title: "Work day scheduler now online!",
        post_content: "A work day scheduler which uses a simple calender allows users to save events for each hour of the day! This scheduler features dynamically updated HTML and CSS.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;