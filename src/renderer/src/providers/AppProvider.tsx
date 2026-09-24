import { AccountInfoProvider } from './AccountInfoProvider'

const providers = [AccountInfoProvider]

export function AppProviders({ children }: { children: React.ReactNode }) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>
  }, children)
}
