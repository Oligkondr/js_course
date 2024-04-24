const getForwardedVariables = (content) => (
    content
        .split('\n')
        .filter((str) => str.startsWith('environment='))
        .flatMap((param) => param
            .slice(13, -1)
            .split(',')
            .filter((param) => param
                .startsWith('X_FORWARDED_'))
            .map((param) => param
                .slice(12)))
        .join(',')
);


const x = '' +
    '[foo:bar]\n' +
    'environment="X_FORWARDED_var1=111"\n' + // <------
    '\n' +
    '[bar:baz]\n' +
    'environment="key2=true,X_FORWARDED_var2=123"\n' + // <------
    'command=sudo -HEu tirion /bin/bash -c \'cd /usr/src/app && make prepare\'\n' +
    '\n' +
    '[baz:foo]\n' +
    'key3="value3"\n' +
    'command=sudo -HEu tirion /bin/bash -c \'cd /usr/src/app && make prepare\'\n' +
    '\n' +
    '[program:prepare]\n' +
    'environment="key5=value5,X_FORWARDED_var3=value,key6=value6"\n' + // <-----
    '\n' +
    '[program:start]\n' +
    'environment="pwd=/temp,user=tirion"\n' + // <------
    '\n' +
    '[program:options]\n' +
    'environment="X_FORWARDED_mail=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en"\n' + // <-----
    'command=sudo -HEu tirion /bin/bash -c \'cd /usr/src/app && make environment\'\n' +
    '\n' +
    '[empty]\n' +
    'command="X_FORWARDED_HOME=/ cd ~"\n'


console.log(getForwardedVariables(x))
console.log('var1=111,var2=123,var3=value,mail=tirion@google.com,HOME=/home/tirion')