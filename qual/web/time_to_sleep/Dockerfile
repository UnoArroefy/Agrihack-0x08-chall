FROM php:apache
RUN apt-get update && apt-get upgrade -y

COPY src/ /var/www/html/
RUN chmod 775 /var/www/html/

EXPOSE 80