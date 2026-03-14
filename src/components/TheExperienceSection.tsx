import Image from 'next/image'
import { imgExperience } from '@/lib/images'

export default function TheExperienceSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto flex justify-center">
        <Image
          src={imgExperience}
          alt="Presenz app experience"
          width={1200}
          height={700}
          className="w-full max-w-5xl h-auto rounded-lg"
        />
      </div>
    </section>
  )
}
