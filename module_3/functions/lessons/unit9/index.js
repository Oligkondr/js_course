import _ from 'lodash';

// const takeOldestVersion1 = (users, count = 1) => {
//     users.sort((a, b) => {
//         const dateA = Date.parse(a.birthday);
//         const dateB = Date.parse(b.birthday);
//         return dateA === dateB
//           ? 0
//           : (dateA > dateB) ? 1 : -1;
//     });
//     return users.slice(0, count);
// };

const takeOldestVersion2 = (users, count = 1) => {
    users = _.sortBy(users, ({birthday}) => Date.parse(birthday));
    return users.slice(0, count);
};

export default takeOldestVersion2;
