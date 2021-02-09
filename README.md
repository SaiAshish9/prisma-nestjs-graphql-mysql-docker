## Installation Step's

```
nest n prisma-mysql
cd prisma-mysql
npm i prisma --save-dev
npx prisma init

```

## DATABASE_URL

```
mysql://saiashish:saiashish@localhost:3306/nestjs
```




## Database Configuration

```
sudo mysql -u root -p
create database nestjs;
use nestjs;
grant all privileges on *.* to 'saiashish'@'localhost';
alter user 'saiashish'@'localhost' identified with mysql_native_password by 'saiashish';
```
