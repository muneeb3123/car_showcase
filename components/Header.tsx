import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed w-full">
      <div className="custom-2:px-4 flex items-center justify-between max-w-[1440px] mx-auto xl:px-28 py-6 px-12 lg:px-20">
        <h1 className="text-white font-bold">GRossery store.</h1>
        <i className='bx bx-menu text-3xl'></i>
        <nav className="flex items-center xl:gap-16 gap-12 custom:hidden">
            <Link className="text-white font-bold text-base no-underline" href="/">About</Link>
            <Link className="text-white font-bold text-base no-underline" href="/">Services</Link>
            <Link className="text-white font-bold text-base no-underline" href="/">Our Work</Link>
            <Link className="text-white font-bold text-base no-underline" href="/">Our projects</Link>
            <Link className="text-white font-bold text-base no-underline" href="/">Our adress</Link>
            <button className="text-white bg-button p-4 rounded-3xl w-32 outline-none border-0">Enroll Now</button>
            <button className="text-white bg-button p-4 rounded-3xl w-32 outline-none border-0">Signup</button><button className="text-white bg-button p-4 rounded-3xl w-32 outline-none border-0">Login</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
