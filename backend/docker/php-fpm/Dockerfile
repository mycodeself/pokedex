FROM php:7.1-fpm

ENV PACKAGES \
        wget \
        zip \
        unzip \
        git \
        openssl \
        libicu-dev \
        zlib1g-dev \
        g++ \
        mysql-client \
        libzip-dev

# Install extra packages 
RUN apt-get update \
    && apt-get install -y \
        $PACKAGES \
    && rm -rf /var/lib/apt/lists/*

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

# Run docker-php-ext-install for available extensions
RUN docker-php-ext-configure intl \
    && docker-php-ext-install pdo pdo_mysql opcache intl

# Install zip extension
RUN pecl install zip
RUN docker-php-ext-enable zip

# Install apcu
RUN pecl install apcu
RUN docker-php-ext-enable apcu

# Install xdebug
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug \
    && echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "display_startup_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "display_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_enable = 1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_autostart = 1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.idekey = \"PHPSTORM\"" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_port = 9000" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_host = 192.168.1.10" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_log = \"/tmp/xdebug.log\"" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# Patch for change remote PHP-FPM port to 9001 for PHPStorm that listen xdebug at 9000
RUN  sed -i -e 's/9000/9001/g' /usr/local/etc/php-fpm.d/zz-docker.conf

# xdebug
EXPOSE 9000
# php-fpm
EXPOSE 9001

# php.ini
ADD php.ini /usr/local/etc/php

# Permission fix
RUN usermod -u 1000 www-data
RUN chown www-data:1000 -R /var/www

# entrypoint
COPY entrypoint /usr/local/bin
RUN chmod 755 /usr/local/bin/entrypoint

USER www-data
WORKDIR /var/www

ENTRYPOINT ["entrypoint"]
CMD ["php-fpm", "-F"]
