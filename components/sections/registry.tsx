"use client"

import { Section } from "@/components/section"
import { Cinzel } from "next/font/google"
import { useSiteConfig } from "@/hooks/use-site-config"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
})

export function Registry() {
  const siteConfig = useSiteConfig()
  const gcashQr = Object.values(siteConfig.giftRegistry ?? {})

  return (
    <Section
      id="registry"
      className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-motif-cream/60" />
          <div className="w-1.5 h-1.5 bg-motif-cream/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-motif-cream/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-motif-cream/80 rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-motif-cream/60" />
        </div>

        <h2 className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-motif-cream mb-2 sm:mb-3 md:mb-4">
          Gift Guide
        </h2>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-motif-cream/90 font-light max-w-2xl mx-auto leading-relaxed px-2">
          Your love, laughter, and company on our wedding day are more than enough. But if you&apos;d like to
          give a gift, a monetary contribution would help us begin this new chapter together and would be
          deeply appreciated.
        </p>

        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1.5 h-1.5 bg-motif-cream/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-motif-cream/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-motif-cream/80 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* {gcashQr.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col items-center gap-8 sm:gap-10">
              {gcashQr.map((item) => (
                <div key={item.id} className="flex flex-col items-center w-full max-w-md">
                  {item.label && (
                    <p
                      className={`${cinzel.className} mb-3 sm:mb-4 text-sm sm:text-base uppercase tracking-[0.12em] text-motif-cream`}
                    >
                      {item.label}
                    </p>
                  )}
                  {item.accountNumber && (
                    <div className="w-full text-center">
                      <p className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-motif-cream/70">
                        Account Number
                      </p>
                      <p className={`${cinzel.className} mt-1 text-sm sm:text-base text-motif-cream drop-shadow-sm`}>
                        {item.accountNumber}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )} */}

        <div className="text-center">
          <p className="text-xs sm:text-sm text-motif-cream/90 italic">
            Thank you from the bottom of our hearts.
          </p>
          <p className="text-xs sm:text-sm text-motif-cream/90 italic text-center mt-2">
            With love,
            <br />
            {siteConfig.couple.brideNickname} and {siteConfig.couple.groomNickname}
          </p>
        </div>
      </div>
    </Section>
  )
}
