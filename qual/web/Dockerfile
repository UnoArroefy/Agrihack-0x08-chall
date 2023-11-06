FROM php:apache
RUN apt-get update -qq && \
    apt-get install -y whois libsocket-getaddrinfo-perl && \
    apt-get clean


COPY src/ /var/www/html/
COPY flag /flag
EXPOSE 80