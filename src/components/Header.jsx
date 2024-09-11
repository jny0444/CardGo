import { useState, createContext, useContext, useEffect } from "react";
import './Header.css';
import { ethers } from "ethers";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            if (window.ethereum) {
                try {
                    // const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    // const provider = new ethers.providers.Web3Provider(window.ethereum);
                    // const balance = await provider.getBalance(acc[0]);
                    // const formattedBalance = ethers.utils.formatEther(balance);

                    // setAccounts([{ address: acc[0], balance: formattedBalance }]);
                    setWalletStatus("...");
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    // console.log(accounts);
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    await provider.send('eth_requestAccounts', []);
                    setWalletStatus("Wallet Connected");
                    setWalletStatus_mobile("✔")
                } catch (error) {
                    console.error('Failed to fetch accounts:', error);
                }
            }
        };

        fetchAccounts();
    }, []); // Runs only once when the component mounts

    return (
        <AccountContext.Provider value={accounts}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccount = () => {
    return useContext(AccountContext);
};

const Header = () => {
    // const [walletStatus, setWalletStatus] = useState('Connect Wallet');
    // const [walletStatus_mobile, setWalletStatus_mobile] = useState('🔗');
    // const accounts = useAccount(); // Use the context to get accounts

    // const connectWallet = async () => {
    //     if (window.ethereum) {
    //         try {
    //             setWalletStatus("...");
    //             const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //             const provider = new ethers.providers.Web3Provider(window.ethereum);
    //             const balance = await provider.getBalance(acc[0]);
    //             const formattedBalance = ethers.utils.formatEther(balance);

    //             setWalletStatus("Wallet Connected");
    //             setWalletStatus_mobile("✔");

    //             // Update accounts context with new wallet data
    //             setAccounts([{ address: acc[0], balance: formattedBalance }]);
    //         } catch (error) {
    //             setWalletStatus("Couldn't Connect");
    //             setWalletStatus_mobile("❌");
    //             console.error(error);
    //         }
    //     }
    const [walletStatus, setWalletStatus] = useState('Connect Wallet');
    const [walletStatus_mobile, setWalletStatus_mobile] = useState('🔗');

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                setWalletStatus("...");
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                 console.log(accounts);
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
    };

    return (
        <div className="header">
            <h1>Card-Go</h1>
            {window.screen.width >= 800 ? 
                <button onClick={connectWallet} className="connect-wallet">{walletStatus}</button>
            :
                <button onClick={connectWallet} className="connectWallet-mobile">{walletStatus_mobile}</button>   
            }
        </div>
    );
};

export default Header;
