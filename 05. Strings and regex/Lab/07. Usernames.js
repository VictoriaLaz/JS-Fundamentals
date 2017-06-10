function usernames(input) {
    let usernames = [];
    for (let mail of input) {
        let username = '';
        mail = mail.split('@');
        username += mail[0] + '.';
        let domains = mail[1].split('.');
        for (let obj of domains) {
            username+=obj[0];
        }
        usernames.push(username);
    }
    return usernames.join(', ');
}
console.log(usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));