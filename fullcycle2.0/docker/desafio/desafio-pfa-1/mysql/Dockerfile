FROM mysql:5.7

ENV MYSQL_DATABASE=app_db \
    MYSQL_ROOT_PASSWORD=root

COPY db_table.sql .
#https://stackoverflow.com/questions/25920029/setting-up-mysql-and-importing-dump-within-dockerfile
COPY ./db_custom_init.sh /docker-entrypoint-initdb.d/

CMD [ "--innodb-use-native-aio=0" ]