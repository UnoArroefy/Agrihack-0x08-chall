FROM pwn.red/jail
COPY --from=python:latest / /srv
COPY server.py /srv/app/run

RUN chmod 755 /srv/app/run