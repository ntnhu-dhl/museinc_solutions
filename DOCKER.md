# B-Star Clone - Docker Deployment

## Quick Start

### Build và chạy với Docker Compose (Khuyến nghị)

```bash
# Build và start container
docker-compose up -d --build

# Xem logs
docker-compose logs -f

# Stop container
docker-compose down
```

Website sẽ chạy tại: **http://localhost:3000**

### Build và chạy với Docker commands

```bash
# Build image
docker build -t bstar-clone .

# Run container
docker run -d -p 3000:80 --name bstar-clone bstar-clone

# Xem logs
docker logs -f bstar-clone

# Stop container
docker stop bstar-clone
docker rm bstar-clone
```

## Cấu trúc Docker

### Multi-stage Build

1. **Stage 1 (Builder)**: Node.js 20 Alpine
   - Install dependencies với `npm ci`
   - Build production bundle với `npm run build`
   - Output: `/app/dist`

2. **Stage 2 (Production)**: Nginx Alpine
   - Copy built files từ builder stage
   - Serve static files với nginx
   - Lightweight image (~50MB)

### Files

- `Dockerfile` - Multi-stage build configuration
- `docker-compose.yml` - Docker Compose configuration
- `nginx.conf` - Nginx server configuration
- `.dockerignore` - Exclude files from build context

## Nginx Configuration

- **Gzip compression** cho tất cả text files
- **Security headers** (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- **Static asset caching** (1 year cache cho images, fonts, CSS, JS)
- **SPA routing** (fallback to index.html)
- **Health check endpoint** tại `/health`

## Port Configuration

Default port: **3000** (host) → **80** (container)

Để thay đổi port, edit `docker-compose.yml`:

```yaml
ports:
  - "8080:80"  # Thay 8080 bằng port bạn muốn
```

## Environment Variables

Hiện tại không có environment variables. Nếu cần thêm (ví dụ: API endpoints), thêm vào `docker-compose.yml`:

```yaml
environment:
  - VITE_API_URL=https://api.example.com
  - NODE_ENV=production
```

## Troubleshooting

### Container không start

```bash
# Check logs
docker-compose logs

# Check container status
docker ps -a
```

### Port đã được sử dụng

```bash
# Tìm process đang dùng port 3000
lsof -i :3000

# Hoặc thay đổi port trong docker-compose.yml
```

### Rebuild sau khi thay đổi code

```bash
# Rebuild và restart
docker-compose up -d --build
```

## Production Deployment

### CapRover

1. Tạo app mới trên CapRover
2. Deploy từ source code:

```bash
# Package source code
tar -czf bstar-clone.tar.gz .

# Upload qua CapRover UI hoặc CLI
```

3. CapRover sẽ tự động detect Dockerfile và build

### Manual Deployment

```bash
# Build image
docker build -t bstar-clone:latest .

# Tag cho registry
docker tag bstar-clone:latest your-registry/bstar-clone:latest

# Push to registry
docker push your-registry/bstar-clone:latest

# Deploy trên server
docker pull your-registry/bstar-clone:latest
docker run -d -p 80:80 --name bstar-clone your-registry/bstar-clone:latest
```

## Performance

- **Image size**: ~50MB (nginx alpine + built assets)
- **Build time**: ~2-3 minutes (tùy máy)
- **Memory usage**: ~10-20MB (nginx)
- **Startup time**: <1 second

## Health Check

```bash
# Check container health
curl http://localhost:3000/health

# Expected response: "healthy"
```
