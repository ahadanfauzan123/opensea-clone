import {useAddress, useMetamask} from '@thirdweb-dev/react'//connect to metamask wallet
import Main from '../components/Home'

const style = {
  wrapper: `text-white bg-gray-800 flex flex-col gap-y-4 h-screen w-screen justify-center items-center`,
  ahasea: `text-[45px] font-extrabold`,
  buttonBlue: `bg-blue-400 rounded-lg px-3 py-2 h-[50px] transition-all hover:ring-2 `,
}

export default function Home() {

  const connectWithMetamask = useMetamask();
  const address = useAddress();//address is actually is your metamask address
  // console.log(address);

  const Authenticate = () => {
    return(
    <div className={style.wrapper}>
      <h1 className={style.ahasea}>ahasea</h1>
      <button onClick={connectWithMetamask} className={style.buttonBlue}>Connect Metamask</button>
    </div>
      
    )
  }
  return <>{address ? <Main /> : Authenticate()}</>
}
