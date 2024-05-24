# Net Blogger

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Welcome to Net Blogger

Welcome to Net Blogger, your premier blogging platform!

At Net Blogger, we are committed to empowering writers, bloggers, and content creators to share their stories with the world. Our platform is designed to make blogging easy, enjoyable, and rewarding, offering a suite of tools that cater to both beginners and experienced bloggers.


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Technologies](#technologies)
- [Links](#links)
- [Questions](#questions)
- [License](#license)

## Features
- Authenticated user login
- View blog posts
- Working Navigation
- Views using handlebars
- Create, edit and delete posts


## Installation

1. Clone the repository to your local machine:
    ```bash
    npm install
    ```
2. Sign into your postgres using:
    ```bash
    psql -U postgres
    ```
3. Create the database:
    ```bash
    \i ./db/schema.sql
    ```
4. Quit the postgres:
    ```bash
    \q
    ```
5. Make sure to also put in your Postgres username and password located in the .env.EXAMPLE file and rename the file to .env

    DB_NAME='blogger_db'
    DB_USER=''
    DB_PASSWORD=''

6. Seed the database: 
    ```bash
    npm run seed
    ```

## Usage

1. Start the application by running:
    ```bash
    npm start
    ```
### Demo

![image](https://github.com/DRX-88/Net-Blogger/assets/162182740/6ddba7af-b95d-4eff-9ad5-a6708ce75005)
![image](https://github.com/DRX-88/Net-Blogger/assets/162182740/64cc79ee-f7f1-4249-96cf-f8548fa46405)
![image](https://github.com/DRX-88/Net-Blogger/assets/162182740/fb627081-e087-4df2-bb85-7eb4899b6b49)

## Contributions

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add new feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

## Technologies

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Link
[Render Deplyment](https://net-blogger.onrender.com)

[Github Repo](https://github.com/DRX-88/Shophify)

## Questions
If you have any questions, you can reach me through the following:
- GitHub: [DRX-88](https://github.com/DRX-88)
- Email: [nrm@gmail.com](mailto:nrmj02@gmail.com)

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)
    
    Copyright (c) 2024 

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 

    The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
