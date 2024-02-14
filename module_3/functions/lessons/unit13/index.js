const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];

const getFreeDomainsCount = (emails) => emails
  .map(email => {
      const [, domain] = email.split('@');
      return domain;
  })
  .filter(domain => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
      if (!Object.hasOwn(acc, domain)) {
          acc[domain] = 0;
      }
      acc[domain] += 1;
      return acc;
  }, {});

console.log(getFreeDomainsCount(emails));
