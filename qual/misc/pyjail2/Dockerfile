FROM pwn.red/jail
COPY --from=python:latest / /srv
COPY chall.py /srv/app/run
COPY flag.txt /srv/flag

RUN chmod 755 /srv/app/run