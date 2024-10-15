import garrLogo from '/logo.svg'

function Logo() {
  return (
    <div>
      <a href='https://garrtool.com' target='_blank'>
        <img src={garrLogo} className='logo' alt='GARR TOOL logo' />
      </a>
    </div>
  )
}

export default Logo
