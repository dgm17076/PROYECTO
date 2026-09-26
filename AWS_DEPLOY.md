# AWS Elastic Beanstalk

El proyecto usa `process.env.PORT` y contiene `Procfile`.

Configura `JWT_SECRET` y `ADMIN_PASSWORD` como variables de entorno antes del despliegue.

Esta versión académica mantiene los datos en memoria. Un reinicio del servidor elimina los datos. Para persistencia real, el siguiente paso es conectar Amazon RDS/PostgreSQL.
