import { signIn } from 'next-auth/react';
import Image from 'next/image';
import twitter512 from '/public/twitter512.png'

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src={twitter512}
        width={100}
        height={100}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map(provider =>
          <button key={provider.name}
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}>

            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Sign in with {provider.name}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Login
