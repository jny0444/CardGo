import { useEffect, useState } from "react";
import './Header.css';
import { ethers } from 'ethers';

const Header = ({ props }) => {
    const [walletStatus, setWalletStatus] = useState('Connect Wallet');
    const [walletStatus_mobile, setWalletStatus_mobile] = useState('🔗');

    const [account, setAccount] = useState([]);

    // useEffect(() => {
    //     console.log(account)
    // }, [account]);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                setWalletStatus("...");
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // console.log(accounts)
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                // const signer = provider.getSigner();
                // const address = await signer.getAddress();
                // console.log(address)

                const accountInfoArray = [];

                for(let i = 0; i < accounts.length; i++) {
                    const balanceWei = await provider.getBalance(accounts[i]);
                    const balanceEther = ethers.utils.formatEther(balanceWei);
                    const accountInfo = [accounts[i], balanceEther];
                    // console.log(accountInfo)
                    // setAccount(prevAccounts => [
                    //     ...prevAccounts, 
                    //     accountInfo
                    // ]);
                    accountInfoArray.push(accountInfo);
                    console.log(accountInfoArray)
                }
                // console.log(account);
                setAccount(accountInfoArray);
                console.log(account)
                // console.log(balanceEther)

                setWalletStatus("Wallet Connected");
                setWalletStatus_mobile("✔");
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
