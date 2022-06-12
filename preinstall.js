if (!/pnpm/.test(process.env.npm_execpath)) {
  console.warn('please use pnpm manager')
  process.exit(1)
}
