import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"

type Props = {
    children: JSX.Element | JSX.Element[]
}

function FrontLayout({ children}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 sm:pt-16 lg:pt-8">
            { children }
        </div>
        <Footer />
    </div>
  )
}

export default FrontLayout