const Footer = () => {
  return (
    <div> <p className="md:hidden">small</p>
      <p className="hidden md:block lg:hidden">medium</p>
      <p className="hidden lg:block xl:hidden">large</p>
      <p className="hidden xl:block">extra large</p>
</div>
  )
}

export default Footer