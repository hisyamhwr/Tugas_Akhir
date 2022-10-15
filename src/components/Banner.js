const Banner = (props) => {
  return (
    <header className="container">
      <h2>{props.title}</h2>
      <h5>{props.sub}</h5>
    </header>
  )
}

export default Banner;