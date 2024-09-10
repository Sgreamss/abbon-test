import Footer from "../components/shared/Footer"
import Navbar from "../components/shared/Navbar"
import { ProfileProvider } from "../context/ProfileContext"

type Props = {
    children: JSX.Element | JSX.Element[]
}

function FrontLayout({ children}: Props) {
  return (
    <ProfileProvider>
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 sm:pt-16 lg:pt-8">
            { children }
        </div>
        <Footer />
    </div>
    </ProfileProvider>
  )
}

export default FrontLayout