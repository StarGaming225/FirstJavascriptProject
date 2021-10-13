// import moment from 'moment';
// const birthday = moment('2003-18-05', 'YYYY-DD-MM')
// console.log(birthday.format('dddd, MMMM Do YYYY'))
// console.log(birthday.fromNow('YYYY') + ' old')

function getUserById(id) {
    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin'
        });
    });
}

try {
    getUserById('a')
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${error}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}