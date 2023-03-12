import { InjectedConnector } from "@web3-react/injected-connector"
import Web3 from "web3"
import { Web3Provider } from '@ethersproject/providers'
export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 97, 1337],
})

export const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider)
    return library
}