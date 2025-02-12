FROM mysql:latest

# Set the MySQL root password
ENV MYSQL_ROOT_PASSWORD=root

# Configure MySQL to use a smaller innodb_buffer_pool_size
ENV MYSQL_OPTS="--innodb_buffer_pool_size=256M"

# Copy a custom my.cnf configuration file if needed
# COPY my.cnf /etc/mysql/my.cnf

# Expose the MySQL port
EXPOSE 3306