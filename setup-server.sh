#!/bin/bash

# Setup script for tofotaxi.livo.africa
# This script configures Nginx and SSL certificates for the new site

set -e  # Exit on any error

DOMAIN="tofotaxi.livo.africa"
SSH_HOST="livoapp-deploy"

echo "🔧 Setting up server configuration for $DOMAIN..."

# Upload and configure Nginx
echo "📋 Configuring Nginx..."
scp nginx-tofotaxi.conf "$SSH_HOST:/etc/nginx/sites-available/$DOMAIN"

# Enable the site
ssh $SSH_HOST "ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN"

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
ssh $SSH_HOST "nginx -t"

# Reload Nginx
echo "🔄 Reloading Nginx..."
ssh $SSH_HOST "systemctl reload nginx"

# Obtain SSL certificate
echo "🔐 Obtaining SSL certificate..."
ssh $SSH_HOST "certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@livo.africa"

echo "✅ Server configuration completed!"
echo "🌐 Site will be available at: https://$DOMAIN"
echo ""
echo "Next steps:"
echo "1. Run ./deploy.sh to deploy your site"
echo "2. The site will automatically redirect HTTP to HTTPS"
