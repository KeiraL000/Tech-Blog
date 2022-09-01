const { Comment } = require('../models');
const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Very cool very nice."
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Awesome work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Can't wait to see more."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Super cool!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Never seen anything like it before!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Sweet!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "That's what I like to hear!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Very usefull!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;