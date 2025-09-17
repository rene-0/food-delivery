import { DesktopNav } from "./components/desktop-nav/DesktopNav"
import { MobileNav } from "./components/mobile-nav/MobileNav"

export default function Nav() {
  return (
    <nav>
      <DesktopNav />
      <MobileNav />
    </nav>
  )
}
