## Installation Step's

```
nest n prisma-mysql
cd prisma-mysql
npm i prisma --save-dev
npx prisma init
```

## Save All Files In VS Code

```
Ctrl + K + W
```

## Database Configuration

```
sudo mysql -u root -p
create database nestjs;
use nestjs;
grant all privileges on *.* to 'saiashish'@'localhost';
alter user 'saiashish'@'localhost' identified with mysql_native_password by 'saiashish';
```

## DATABASE_URL

```
mysql://saiashish:saiashish@localhost:3306/nestjs
```

## Migration

```
npx prisma migrate dev --name init --preview-feature
sudo apt  install tree
tree prisma
```

## Perform migration whenever something is changed in schema.prisma

```
npx prisma migrate dev --preview-feature
```

## SQL Statement's

```
insert into nestjs.Post values (2,'test1','234',true,1);
```

## Generated Schema

```
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,

    FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")
```

```
A number of use cases (Composition/Dependency Injection, Runtime Type Assertions, Reflection/Mirroring, Testing) want the ability to add additional metadata to a class in a consistent manner.
```



### Retrieve all published posts and their authors

```graphql
query {
  feed {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

```
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"query {\n  feed {\n    id\n    title\n    content\n    published\n    author {\n      id\n      name\n      email\n    }\n  }\n}\n"}' --compressed
```

```
{"data":{"feed":[{"id":"1","title":"test","content":"123","published":true,"author":{"id":"1","name":"sai","email":"sai@gmail.com"}},{"id":"2","title":"test1","content":"234","published":true,"author":{"id":"1","name":"sai","email":"sai@gmail.com"}}]}}
```

<Details><Summary><strong>See more API operations</strong></Summary>

### Create a new user

```graphql
mutation {
  signupUser(
    data: {
      name: "Sarah"
      email: "sarah@prisma.io"
    }
  ) {
    id
  }
}
```

### Create a new draft

```graphql
mutation {
  createDraft(
    title: "Join the Prisma Slack"
    content: "https://slack.prisma.io"
    authorEmail: "alice@prisma.io"
  ) {
    id
    published
  }
}
```

### Publish an existing draft

```graphql
mutation {
  publish(id: __POST_ID__) {
    id
    published
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

### Search for posts with a specific title or content

```graphql
{
  filterPosts(searchString: "graphql") {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

### Retrieve a single post

```graphql
{
  post(where: { id: __POST_ID__ }) {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

### Delete a post

```graphql
mutation {
  deleteOnePost(where: {id: __POST_ID__})
  {
    id
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `filterPosts`-query.

</Details>