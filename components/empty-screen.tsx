import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'What is design thinking',
    message: `What is the concept of design thinking, and how does it differ from traditional approaches in solving problems and creating innovative solutions?`
  },
  {
    heading: 'How to use lean UX in Project implementation',
    message: 'How can one effectively incorporate the principles of Lean UX into the implementation of a project, ensuring a more user-centered and iterative design process? \n'
  },
  {
    heading: 'What is meant by heuristic evaluation and how to use it',
    message: `What does the term 'heuristic evaluation' signify in the context of user interface design, and what are the steps or methods involved in effectively employing this evaluation technique? \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border p-8 text-center"> {/* Text center aligned */}
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to integrating artificial intelligence (AI) to assist UX/UI designers with their queries.
        </h1>
        <p className="mb-2 leading-normal">
          This is an open source AI chatbot app created by Praveen Manchi to assist fellow UI/UX designers to resolve questions related to UX, UI.
        </p>
        {/* New paragraph */}
        <p className="mb-4 leading-normal">
          Explore more about this project and its contributions.
        </p>
        {/* Buttons centered below the new paragraph */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/praveenmanchi/" className="button-style">LinkedIn</a>
          <a href="https://github.com/praveenmanchi" className="button-style">GitHub</a>
        </div>
        <p className="leading-normal">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-center space-y-2"> {/* Items center aligned */}
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

