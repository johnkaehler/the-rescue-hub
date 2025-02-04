import Image from 'next/image';

export default function Johnstagram() {
    return (
      <main>
        <h1>Welcome to Johnstagram</h1>
        <p>This is the about page.</p>
        
        <div className="flex items-center justify-right w-200 h-200">
        <Image src="/images/selfie.JPG"
            alt="Hero Image"
            width={100}
            height={100}
            className="rounded-full object-cover"
            />
        </div>

        <div className="bg-blue border-white">
            <h1>Hello</h1>
        </div>
      </main>
    );
  }