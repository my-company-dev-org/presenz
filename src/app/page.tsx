import Navbar               from '@/components/Navbar'
import HeroSection          from '@/components/HeroSection'
import ExperienceSection    from '@/components/ExperienceSection'
import CategorySection      from '@/components/CategorySection'
import IPhoneSection        from '@/components/IPhoneSection'
import NoProfilesSection    from '@/components/NoProfilesSection'
import TheExperienceSection from '@/components/TheExperienceSection'
import Footer               from '@/components/Footer'

export default function LandingPage() {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <CategorySection />
      <IPhoneSection />
      <NoProfilesSection />
      <TheExperienceSection />
      <Footer />
    </div>
  )
}
