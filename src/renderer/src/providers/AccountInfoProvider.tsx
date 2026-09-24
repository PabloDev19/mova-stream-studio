import { createContext, useContext, useEffect, useState } from 'react'

export interface ChannelInfoType {
  id: string
  name: string
  thumbnail: string
  subscribers: string
}

export interface AccountInfoType {
  id: string
  name: string
  thumbnail: string
  subscribers: string
}

interface AccountInfoContextType {
  accountInfo: ChannelInfoType | null
  setAccountInfo: React.Dispatch<React.SetStateAction<AccountInfoType | null>>
}

const AccountInfoContext = createContext<AccountInfoContextType | null>(null)

interface AccountInfoProviderProps {
  children: React.ReactNode
}

export const AccountInfoProvider = ({ children }: AccountInfoProviderProps) => {
  const [accountInfo, setAccountInfo] = useState<AccountInfoType | null>(null)

  /* useEffect(() => {
    window.api.onYoutubeAccountInfo((data) => {
      setAccountInfo(data)
    })
  }, []) */

  return (
    <AccountInfoContext.Provider
      value={{
        accountInfo,
        setAccountInfo
      }}
    >
      {children}
    </AccountInfoContext.Provider>
  )
}

export const useAccountInfo = (): AccountInfoContextType => {
  const context = useContext(AccountInfoContext)

  if (!context) {
    throw new Error('useAccountInfo debe usarse dentro de AccountInfoProvider')
  }

  return context
}
