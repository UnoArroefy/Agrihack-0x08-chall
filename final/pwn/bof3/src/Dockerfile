FROM ubuntu:jammy

EXPOSE 1470

RUN apt update && apt upgrade -y && apt update --fix-missing
RUN apt-get install -y socat

RUN mkdir /home/pwn
COPY flag.txt /home/pwn/flag.txt
COPY bof3 /home/pwn/bof3
WORKDIR /home/pwn

RUN chown -R 755 /home/pwn
RUN chmod 700 /usr/bin/* /bin/* /tmp /dev/shm
RUN chmod 755 /usr/bin/env /bin/dash /bin/bash /bin/sh /bin/cat /usr/bin/id /bin/ls
RUN chmod +x /home/pwn/bof3

CMD socat TCP-LISTEN:1470,reuseaddr,fork EXEC:/home/pwn/bof3,su=nobody
