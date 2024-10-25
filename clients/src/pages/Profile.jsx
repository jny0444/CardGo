import { useEffect, useState } from "react";
import { ethers } from 'ethers';

const Profile = () => {
    const [account, setAccount] = useState([]);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);

                const accountInfoArray = [];

                for(let i = 0; i < accounts.length; i++) {
                    const balanceWei = await provider.getBalance(accounts[i]);
                    const balanceEther = ethers.utils.formatEther(balanceWei);
                    const accountInfo = [accounts[i], balanceEther];
        
                    accountInfoArray.push(accountInfo);
                    
                    setAccount(accountInfoArray);
                }

            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        connectWallet();
    }, []);

    return (
        <div>
            {account.map((account, index) => {
                return (
                    <div key={index}>
                        <p>Account: {account[0]}</p>
                        <p>Balance: {account[1]} ETH</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Profile;