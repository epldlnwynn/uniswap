const hre = require('hardhat')

/* eslint-env node */
require('dotenv').config()

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  // const unlockTime = currentTimestampInSeconds + 60
  //
  // const lockedAmount = hre.ethers.parseEther('0.001')
  // const lock = await hre.ethers.deployContract('Lock', [unlockTime], {
  //   value: lockedAmount,
  // })
  //
  // await lock.waitForDeployment()

  const { artifacts } = hre
  console.log('main', artifacts, hre.ethers)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})