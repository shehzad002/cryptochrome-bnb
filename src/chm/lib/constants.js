import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  chm: {
    97: '0x1338c47ecE5dcA7604756d620EE17cC8d56fd065',
  },
  masterChef: {
    97: '0xc05E1f2c07dA9d1f5c430a2A1D30dcF845431683',
  },
  weth: {
    97: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xChm: {
    97: '0x93BcF5C3A4ef8C81C4921f962268c4496a3114f2'
  }
}



export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      97: '0x1338c47ecE5dcA7604756d620EE17cC8d56fd065',
    },
    tokenAddresses: {
      97: '0x1338c47ecE5dcA7604756d620EE17cC8d56fd065',
    },
    name: 'Chm Party!',
    symbol: 'CHM-CHM TOKEN',
    tokenSymbol: 'CHM',
    icon: '🍣',
  }
]
