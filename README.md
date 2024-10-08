# Cyan Home
[![Sync](https://github.com/CyanChanges/home/actions/workflows/sync.yml/badge.svg)](https://github.com/CyanChanges/home/actions/workflows/sync.yml)  
Built with Bun + Nuxt + PrimeVue


## Browse 

Try access any of following:

| Defaults | Cloudflare(Netlify) | Netlify | GitHubPages |  
| -------- | ------------------- | ------- | ----------- |
| [cyans.me](https://cyans.me) | [www](https://www.cyans.me/) | [netlify.home](https://netlify.home.cyans.me/) | [ghpages.home](https://ghpages.home.cyans.me/) |

## Build
### Clone the repository
```shell
git clone https://github.com/CyanChanges/home.git cyans-home
cd cyans-home
```

### Install
We use Bun for both JavaScript Runtime and Package Manager.

```shell
bun install
```

### Run 

```shell
bun run dev -o
```

### Build
We use Bun for both JavaScript Runtime and Package Manager.
```shell
bun run build
```

### Cloudflare Pages Preview(wrangler)
A build is required before doing this.
```shell
bunx wrangler pages dev dist/
```

