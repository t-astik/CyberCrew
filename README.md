# Development process
## Initial setup

**Step 1.** Clone this repo.

```shell
git clone git@github.com:coreblocks/CyberCrew.git
```

**Step 2.** Install NVM.

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

**Step 3.** Install Node via NVM

```shell
source scripts/useNodeVersion.sh
```

**Step 4.** Install dependencies

```shell
npm ci
```

*Caution:* **Always** prefer `npm ci` over `npm i` when not installing
any new packages. This helps preserve dependency version freeze, since running
`npm i` can update indirect dependencies.

**Step 5**. Run the app.

```shell
npm run dev
```