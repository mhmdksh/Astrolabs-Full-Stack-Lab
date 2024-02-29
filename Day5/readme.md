# Day 5 (System Security Part 2 & Scalability)

## Authentication and Authorization
1. Strong Authentication Mechanisms: Implement multi-factor authentication (MFA) to provide an additional layer of security beyond just passwords.
2. Least Privilege Principle: Ensure that users have the minimum levels of access (or permissions) needed to perform their tasks, reducing the risk of unauthorized access to sensitive information.
3. Role based Access Control. RBAC and it's role in Internal and external Access

## Incident Response and Monitoring
1. Continuous Monitoring: Implement continuous monitoring tools to detect and respond to security incidents in real-time.
2. Incident Response Plan: Have a clear and tested incident response plan in place to quickly address any security breaches or compliance issues.
3. Backup & Restore. RPO (Return Point Objective) & RTO (Return Time Objective). Defining SLAs 

## User Education and Awareness
Training: Regularly employees on the importance of security and compliance, including how to recognize phishing attempts and other common cyber threats, Use stronger passwords, 2FA's etc ..

## Scalability
1. Deploying a Highly Available Application
2. Explain Load Balancers and their role in deploying HA
3. Infrastructure Design of a High Available System (AWS, Local)
4. Two types: Horizontal & Vertical

Exercise Collaborative work to build a scalable end-to-end system that has security and development best practices in place.

Highly Available Backend using Docker
`docker-compose.yml` Example:

```
version: '3'
services:
  backend1:
    image: eddsnx3/astro-backend
    container_name: backend1
    build: .
    networks:
      - backend
    ports:
      - "3000"
    env_file:
      - .env

  backend2:
    image: eddsnx3/astro-backend
    container_name: backend2
    build: .
    networks:
      - backend
    ports:
      - "3000"
    env_file:
      - .env

  backend3:
    image: eddsnx3/astro-backend
    container_name: backend3
    build: .
    networks:
      - backend
    ports:
      - "3000"
    env_file:
      - .env

  caddy:
    image: caddy
    container_name: caddy
    restart: unless-stopped
    networks:
      - backend
    ports:
      - 80:80
      - 443:443
    env_file:
      - .env
    environment:
      - BACKEND_URL=${BACKEND_URL:-backend.local}
      - IP_WHITELIST=${IP_WHITELIST:-0.0.0.0/0}
    volumes:
      - caddy_data:/data
      - caddy_config:/config
      - .Caddyfile:/etc/caddy/Caddyfile

volumes:
  caddy_data:
  caddy_config:

networks:
  backend:
```


`Caddyfile` Example:

```
{$BACKEND_URL} {
    route {
        @allowed {
            path /*
            remote_ip {$IP_WHITELIST}
        }
        reverse_proxy @allowed {
          to backend1:3000 backend2:3000 backend3:3000
          lb_policy round_robin
          health_uri /health
          health_interval 5s
          health_timeout 2s
          health_status 200
        }
        respond 403
    }
}
```