FROM ubuntu:lunar

EXPOSE 8000

RUN apt update && apt upgrade -y && apt update --fix-missing
RUN apt-get install -y socat

RUN mkdir /pwn
COPY flag.txt /pwn/flag.txt
COPY chall /pwn/main
WORKDIR /pwn

RUN chown -R 755 /pwn
RUN chmod +x /pwn/main

CMD socat TCP-LISTEN:8000,reuseaddr,fork EXEC:/pwn/main,su=nobody