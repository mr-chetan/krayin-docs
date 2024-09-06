# Installation

[[TOC]]

## Install Using GUI Installer

To install Krayin using our GUI installer, you can follow any of the following methods:

#### Method 1:

- Choose the directory where you want to install Krayin. Open your terminal and navigate to this directory. 

- Once you are in the desired directory, run the following command in your terminal to install Krayin:

    ```sh
    composer create-project krayin/laravel-crm
    ```

- Configure your HTTP server to point to the **`public/`** directory of the project.

- Open your browser and access the following URL:

    ```
    http://localhost/krayin/public/
    ```

  This will launch the Krayin installer.

#### Method 2:

Otherwise you can download the zip file and install it using the following steps:

- [Download Krayin](https://krayincrm.com/download/) from our website.

- Extract the contents of the downloaded

- Navigate to the project root directory.

- Run the following command:

    ```sh
    composer create project
    ```

- Configure your HTTP server to point to the **`public/`** directory of the project.

- Open your browser and access the following URL:

    ```
    http://localhost/krayin/public/
    ```

   This will launch the Krayin installer.

::: warning
Ensure that Composer is installed on your system
:::

## Install Using Composer

To install Krayin using Composer, use the following steps:

- Choose the directory where you want to install Krayin. Open your terminal and navigate to this directory.

- Once you are in the desired directory, run the following command in your terminal to install Krayin:

- Run the following command:

    ```bash
    composer create-project krayin/laravel-crm
    ```

- Run the following command:

    ```bash
    php artisan krayin-crm:install
    ```

    ::: warning
    During the installation process, if the **`.env`** file doesn't exist, the installer will prompt you to provide the necessary information.
    :::

- Follow the prompts during the installation process to provide the following details:

    ```bash
    - Please enter the application name : 
    - Please enter the application URL : 
    - Please select the default application locale : 
    - Please select the default currency : 
    - Please select the database connection : 
    - Please select the database host : 
    - Please select the database name : 
    - Please enter your database username : 
    - Please enter your database password : 
    ```

- For Create your admin credentials
    ```bash
    - Enter the name of the admin user :
    - Enter the email address of the admin user :
    - Configure the password for the admin user :
    ```

## Start Using Krayin

### On a Production Server

To access Krayin on a production server, open your domain in a web browser. For example:

```
https://example.com/
```

### On Your Local Server

To access Krayin on your local server, follow these steps:

1. Configure your HTTP server to point to the **`public/`** directory of the project.
2. Run the following command:

    ```bash
    php artisan serve
    ```

3. Open your browser and access the provided local server URL.

### Login as an Admin

To log in as an admin, visit **`https://example.com/admin/`**. If you used the **`php artisan krayin-crm:install`** command, use the following credentials:

```text
Email: admin@example.com
Password: admin123
```

### Contributing

Contributions are welcome! Follow the contribution guidelines to get started.

### License

Krayin is open-sourced software licensed under the MIT license.