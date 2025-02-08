# currency-converter

Currency converter on API referenced value.

## 📌 GIT repository

- [Git repo](https://github.com/juandavidboo/currency-converter/tree/main)

```sh
git clone https://github.com/juandavidboo/currency-converter.git
```

## 🌍 API

- **Api documentation:** [Vat Comply API Docs](https://www.vatcomply.com/documentation) 
- **Api endpoing:** (https://api.vatcomply.com/rates)

```http
GET https://api.vatcomply.com/rates HTTP/1.1
````

## 🎨 Design Reference

- **Figma file** [View design](https://www.figma.com/design/B7sfg7erzZUozriMWXD49H/Untitled?node-id=0-1&t=nqRMGEkY4AdZiw0r-)

## 🛠 Install & Setup

### Prerequisites

- Vite requires Node.js version >= 18.0.0.
- Check version steps and install with nvm:

````sh
node -v
````

- You can update your Node.js or use NVM

````sh
nvm install 18
nvm use 18
````

### Install dependencies

````sh
npm install
````

## Available scripts

| Script | Command | NPM | Description |
|---|---|---|---|
| dev | vite | npm run dev | # Starts local development serv |
| build | vite build | npm run build | # Builds for production |
| lint | eslint . | npm run lint | # Runs ESLint on all files |
| preview | vite preview | npm run preview | # Serves production build locally |

Run scripts using

````sh
npm run dev
````

## 📖 Project Overview

- **Built with:** Vite + React
- **Styling:** Tailwind CSS
- **Validation:** React Hook Form
- **Data Fetching:** Fetch API

## Features

✅Convert between EUR & USD
✅ Live Exchange Rates (updated daily)
✅ Input Validation
✅ Swap Currencies Button
✅ Responsive Design