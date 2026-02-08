"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Award, GraduationCap } from "lucide-react"

const agrements = [
  {
    icon: ShieldCheck,
    label: "DREETS Occitanie",
    sublabel: "Agr\u00e9ment r\u00e9gional",
  },
  {
    icon: Award,
    label: "Qualiopi",
    sublabel: "Certification qualit\u00e9",
  },
  {
    icon: GraduationCap,
    label: "Agr\u00e9ment Formation",
    sublabel: "N\u00b073310792831",
  },
]

export function Agrements() {
  return (
    <section className="my-20">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[0.7rem] text-[#6B6B6B] uppercase tracking-[0.25em] text-center mb-5 font-medium">
            {"Nos agr\u00e9ments & certifications"}
          </p>
          <div className="rounded-[30px] bg-[#FAFAFA] border border-[#ECECEC] py-8 px-6 sm:px-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center divide-y sm:divide-y-0 sm:divide-x divide-[#E0E0E0]/70">
              {agrements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-5 sm:py-0 sm:px-10 first:sm:pl-0 last:sm:pr-0"
                >
                  <item.icon
                    className="h-5 w-5 flex-shrink-0 text-[#78B42B]"
                    strokeWidth={1.6}
                  />
                  <div>
                    <p className="font-serif text-[0.95rem] font-semibold text-[#2D2D2D] leading-tight">
                      {item.label}
                    </p>
                    <p className="text-[0.72rem] text-[#6B6B6B] mt-0.5">
                      {item.sublabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
