FROM ubuntu:jammy

EXPOSE 1470

RUN apt update && apt upgrade -y && apt update --fix-missing
RUN apt-get install -y socat

RUN mkdir /home/pwn
COPY flag.txt /home/pwn/flag.txt
COPY format_string /home/pwn/format_string
WORKDIR /home/pwn

RUN chown -R 755 /home/pwn
RUN chmod 700 /usr/bin/* /bin/* /tmp /dev/shm
RUN chmod 755 /usr/bin/env /bin/dash /bin/bash /bin/sh /bin/cat /usr/bin/id /bin/ls
RUN chmod +x /home/pwn/format_string

CMD socat TCP-LISTEN:1470,reuseaddr,fork EXEC:/home/pwn/format_string,su=nobody
