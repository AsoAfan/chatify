# Backend Setup

This guide will walk you through the setup process for the Laravel backend in this project.

## Prerequisites

Make sure you have the following installed:

- PHP (version 8.1 or higher)
- Composer
- MySQL

## 1. Install Dependencies

Run the following command to install PHP dependencies:

```shell
composer install
```

## 2. Configure Environment Variables

Copy the `.env.example` file to `.env`:

```shell
cp .env.example .env
```

Update the `.env` file with your database and other environment-specific configurations.

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=chattify
DB_USERNAME=root
DB_PASSWORD=your_password
```

## 3. Generate Application Key

Generate the application key by running:

```shell
php artisan key:generate
```

## 4. Set Up Database

Run the migrations to create the necessary database tables:

```shell
php artisan migrate
```

## 6. Start the server

To start the server, run the following:

```shell
php artisan serve
```
