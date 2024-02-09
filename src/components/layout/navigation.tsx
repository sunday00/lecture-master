import LinkWrap from '@/components/layout/LinkWrap'

const Navigation = () => {


  return (
    <nav>
      <ul>
        <li>
          <LinkWrap href="/" name={'Home'}/>
        </li>
        <li>
          <LinkWrap href="/about-us/me" name={'AboutUs'}/>
        </li>
        <li>
          <LinkWrap href="/about-us/company" name={'Company'}/>
        </li>
        <li>
          <LinkWrap href="/pocketmon/:monster" name={'Pocketmon'}/>
        </li>
        <li>
          <LinkWrap href="/movie" name={'Movie'}/>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation