const Pool = require('pg').Pool

const connect2 = new Pool({
    user: 'ruuvi_sel',
    host: 'dev.vk.edu.ee',
    database: 'world_student',
    password: 'ruuvisel',
    port: 5432,
});

module.exports = connect2;