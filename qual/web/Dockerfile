FROM php:apache
RUN apt-get -qq update && \
  apt-get install whois && \
  libsocket-getaddrinfo-perl


COPY src/ /var/www/html/
COPY flag /flag
EXPOSE 80