FROM php:7.3-apache
RUN apt-get update && apt-get install -y git
RUN docker-php-ext-install pdo pdo_mysql mysqli
RUN a2enmod rewrite
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer require mailgun/mailgun-php kriswallsmith/buzz nyholm/psr7
COPY . /var/www/html/
# EXPOSE 80/tcp
# EXPOSE 443/tcp
