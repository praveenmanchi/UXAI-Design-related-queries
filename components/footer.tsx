import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      We are feeding, fine-tuning, and training our model. A little or full contain has misleading information is to be expected. {' '}
      {/* <ExternalLink href="https://nextjs.org">Submit Feedback</ExternalLink> */}
       {/* and{' '}
      <ExternalLink href="https://vercel.com/storage/kv">
        Vercel KV
      </ExternalLink>
      . */}
    </p>
  )
}
