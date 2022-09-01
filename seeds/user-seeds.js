const { User } = require('../models');
const userData = [
    {
        username: "Ben_bill",
        twitter: "benb",
        github: "benb",
        email: "ben_b@yahoo.com",
        password: "p@ssword1"
    },
    {
        username: "Susie_small",
        twitter: "susies",
        github: "susies",
        email: "susie_s@yahoo.com",
        password: "p@ssword2"
    },
    {
        username: "Angie_fall",
        twitter: "angief",
        github: "angief",
        email: "angie_f@yahoo.com",
        password: "p@ssword3"
    },
    {
        username: "Andrea_lopez",
        twitter: "andreal",
        github: "andreal",
        email: "andrea_l@yahoo.com",
        password: "p@ssword4"
    },
    {
        username: "Shrek_donkey",
        twitter: "shrekd",
        github: "shrekd",
        email: "shrek_d@yahoo.com",
        password: "p@ssword5"
    },
    {
        username: "Kevin_apricot",
        twitter: "kevina",
        github: "kevina",
        email: "kevin_a@yahoo.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;