const driver = {
    host: process.env.DB_HOST||'localhost',
    port: process.env.DB_PORT||28015,
    db: process.env.DB_DATABASE||'REN',
    user: process.env.DB_USER||'',
    password: process.env.DB_PASSWORD||'',
}
export default driver;