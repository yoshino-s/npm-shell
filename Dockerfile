FROM ubuntu:latest

COPY / /mnt/etc

RUN ls -ahl /mnt/etc