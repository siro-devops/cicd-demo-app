# Dockerfile for DevOps Portfolio Dashboard
# Uses nginx to serve static files

FROM nginx:alpine

# Copy all website files to nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check to ensure nginx is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Nginx will start automatically
