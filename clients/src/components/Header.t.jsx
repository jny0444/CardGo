import { useState, createContext, useContext } from "react";
import './Header.css'
import { ethers } from "ethers";
// const ethers = require('ethers');

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
    const accounts = (async () => await window.ethereum.request({ method: 'eth_requestAccounts' }));
    console.log(accounts)

    return (
        <AccountContext.Provider value={accounts}>
            {children}
        </AccountContext.Provider>
    )
}

export const useAccount = () => {
    return useContext(AccountContext);
}

const Header = () => {
    const [walletStatus, setWalletStatus] = useState('Connect Wallet');
    const [walletStatus_mobile, setWalletStatus_mobile] = useState('🔗');

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                setWalletStatus("...");
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // console.log(accounts);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send('eth_requestAccounts', []);
                setWalletStatus("Wallet Connected");
                setWalletStatus_mobile("✔")
            } catch (error) {
                setWalletStatus("Couldn't Connect");
                setWalletStatus_mobile("❌");
                console.error(error);
            }
        }
    }

    return (
        <div className="header">
            <h1>Card-Go</h1>
            {window.screen.width >= 800 ? 
                <button onClick={connectWallet} className="connect-wallet">{walletStatus}</button>
            :
                <button onClick={connectWallet} className="connectWallet-mobile">{walletStatus_mobile}</button>   
            }
            {/* <button onClick={connectWallet} className={window.screen.width >= 800 ? "connectWallet" : "connectWallet-mobile"}>{walletStatus}</button> */}
        </div>
    )
}

export default Header;