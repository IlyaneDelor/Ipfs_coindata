import { FMPRequestManager } from './FMPRequestManager';

const FMP_API_KEY = 'cd1fa7d7fd574f411941a3225af70d68';

export const fmpRequestManagerFactory = () =>
  new FMPRequestManager({
    baseURL: 'https://financialmodelingprep.com/api/v3',
    apiKey: FMP_API_KEY,
  });
