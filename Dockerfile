# NOVO Lavan — site estático servido por nginx
# Easypanel: criar um App apontando para este repositório (build por Dockerfile).
FROM nginx:1.27-alpine

# Config opcional (cache de assets + fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Conteúdo do site
COPY index.html maquinas.html mercado.html sobre.html favicon.svg /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
# Sem HEALTHCHECK: o nginx roda em foreground como PID 1 e o Easypanel monitora pelo domínio.
# (O wget do busybox/Alpine não interpreta bem flags combinadas, o que marcava o container como unhealthy.)
