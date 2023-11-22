FROM ubuntu:lunar

EXPOSE 16021

RUN apt-get update && apt-get upgrade -y && apt-get update --fix-missing
RUN apt-get install -y python3 socat
RUN apt-get install -y python3-pip
RUN python3 -m pip install pycryptodome --break-system-packages

RUN mkdir /cry
COPY server.py /cry/server.py
COPY secret.py /cry/secret.py

WORKDIR /cry

# securing the flag
RUN chmod -R 755 /cry/
RUN chmod 744 /cry/secret.py

# securing the environment
RUN chmod 700  /tmp /dev/shm
RUN chmod 755 /usr/bin/env /usr/bin/python3 /bin/dash /bin/bash /bin/sh /bin/cat /usr/bin/groups /usr/bin/id /bin/ls

RUN chmod +x /cry/server.py

CMD socat TCP-LISTEN:16021,reuseaddr,fork EXEC:/cry/server.py,su=nobody