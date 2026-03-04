import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? motion.a : motion.div
  
  return (
    <Card
      {...(href ? { href } : {})}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderColor: "rgba(255, 255, 255, 0.2)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex flex-col rounded-xl border border-white/10",
        "bg-white/5 backdrop-blur-sm",
        "p-4 text-start sm:p-6",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300 cursor-pointer",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-white/10">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="text-sm text-white/60">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-white/80">
        {text}
      </p>
    </Card>
  )
}