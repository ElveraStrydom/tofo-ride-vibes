#!/bin/bash

# Deployment script for tofotaxi.livo.africa
# This script deploys the static site to the VPS with proper directory structure

set -e  # Exit on any error

# Configuration
DOMAIN="tofotaxi.livo.africa"
SSH_HOST="livoapp-deploy"
REMOTE_DIR="/var/www/$DOMAIN"
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)"
TIMESTAMP=$(date +%s%3N)

echo "🚀 Starting deployment for $DOMAIN..."

# Build the production version
echo "🏗️  Building production version..."
npm run build

# Create deployment package from dist directory
echo "📦 Creating deployment package..."
TEMP_DIR=$(mktemp -d)
cp -r "$LOCAL_DIR/dist"/* "$TEMP_DIR/" 2>/dev/null || true

# Create remote directory structure if it doesn't exist
echo "🏗️  Setting up remote directory structure..."
ssh $SSH_HOST "mkdir -p $REMOTE_DIR/{releases,shared}"

# Upload files to new release directory
RELEASE_DIR="$REMOTE_DIR/releases/$TIMESTAMP"
echo "📤 Uploading files to $RELEASE_DIR..."
ssh $SSH_HOST "mkdir -p $RELEASE_DIR"
scp -r "$TEMP_DIR"/* "$SSH_HOST:$RELEASE_DIR/"

# Set proper permissions
echo "🔒 Setting proper permissions..."
ssh $SSH_HOST "chown -R www-data:www-data $RELEASE_DIR"
ssh $SSH_HOST "find $RELEASE_DIR -type f -exec chmod 644 {} \;"
ssh $SSH_HOST "find $RELEASE_DIR -type d -exec chmod 755 {} \;"

# Update symlink to point to new release
echo "🔗 Updating current symlink..."
ssh $SSH_HOST "ln -sfn $RELEASE_DIR $REMOTE_DIR/current"

# Clean up old releases (keep last 5)
echo "🧹 Cleaning up old releases..."
ssh $SSH_HOST "cd $REMOTE_DIR/releases && ls -t | tail -n +6 | xargs -r rm -rf"

# Cleanup local temp directory
rm -rf "$TEMP_DIR"

echo "✅ Deployment completed successfully!"
echo "🌐 Site should be available at: https://$DOMAIN"
echo "📁 Deployed to: $RELEASE_DIR"
