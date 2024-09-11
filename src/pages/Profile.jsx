import { useAccount } from "../components/Header";

const Profile = () => {
    const ACCOUNTS = useAccount();
    console.log(ACCOUNTS);

    return (
        <div>
            {ACCOUNTS && ACCOUNTS.length > 0 ? (
                <ul>
                    {ACCOUNTS.map((account, index) => {
                        <li key={index}>
                            <h3>Account {index + 1}</h3>
                            <p>Address: {account}</p>
                        </li>
                    })}
                </ul>
            ) : (
                <p>No accounts connected</p>
            )}
        </div>
    )
}

export default Profile;