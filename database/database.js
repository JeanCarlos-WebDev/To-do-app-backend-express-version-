import pgk from "pg";
const {Pool} = pgk


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'jean300805',
    port: 5432,
})
// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })

export default pool