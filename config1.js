const Pool = require('pg').Pool

const connect1 = new Pool({
    user: 'ruuvi_sel',
    host: 'dev.vk.edu.ee',
    database: 'dbhitsa2019',
    password: 'ruuvisel',
    port: 5432,
});

module.exports = connect1;