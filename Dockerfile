# NOVO Lavan — site estático servido por nginx
# Easypanel: criar um App apontando para este repositório (build por Dockerfile).
FROM nginx:1.27-alpine

# Config opcional (cache de assets + fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Conteúdo do site
COPY index.html maquinas.html mercado.html sobre.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
HEALTHCHECK CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1
