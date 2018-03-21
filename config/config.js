require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "mysql://a2ko3htk5wrn6dmg:b6ki2z9mc49svjii@ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zuqyi0dc29vbd24m",
        "dialect": "mysql"
    }
};