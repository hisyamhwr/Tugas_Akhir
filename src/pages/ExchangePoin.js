import { Banner, Wallet, Pulsa } from '../components';

const ExchangePoin = (props) => {
  if(props.choose === "wallet"){
    return (
      <>
        <Banner title="Penukaran Poin" sub="Riwayat Penukaran" />
        <Wallet sub={props.nav} />
      </>
    )
  }else if(props.choose === 'pulsa') {
    return (
      <>
        <Banner title="Penukaran Poin" sub="Riwayat Penukaran" />
        <Pulsa sub={props.nav} />
      </>
    )
  }
}

export default ExchangePoin;
