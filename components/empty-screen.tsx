import { useEffect, useState } from 'react';
import { UseChatHelpers } from 'ai/react';
import { Button } from '@/components/ui/button';
import { IconArrowRight, IconDownload, IconGitHub, IconShare } from '@/components/ui/icons';

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
];

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate-gradient');
  }, []);

  return (
    <div className="text-white flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className={`text-5xl font-bold mb-6 ${animationClass}`}>
          Welcome to integrating artificial intelligence (AI) to assist UX/UI designers with their queries.
        </h1>
        <p className="mb-8 text-xl">
          This is an open source AI chatbot app created by Praveen Manchi to assist fellow UI/UX designers to resolve questions related to UX, UI.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <IconDownload className="h-6 w-6" />
          <IconShare className="h-6 w-6" />
          <IconGitHub className="h-6 w-6" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="text-white text-lg"
              onClick={() => setInput(message.message)}
            >
              {message.heading}
              <IconArrowRight className="ml-2" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: any, title: any, description: any }) {
  return (
    <div className="feature-card p-6 rounded-lg text-center">
      <div className="icon-container mb-4">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}

const styles = `
  .animate-gradient {
    background: linear-gradient(45deg, #FFC700, #FF0000, #FF00FF, #0000FF, #00FFFF, #00FF00, #FFFF00);
    background-size: 600% 600%;
    -webkit-animation: gradientAnimation 10s ease infinite;
    -moz-animation: gradientAnimation 10s ease infinite;
    animation: gradientAnimation 10s ease infinite;
  }

  @-webkit-keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @-moz-keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// Add the styles to the head of the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
