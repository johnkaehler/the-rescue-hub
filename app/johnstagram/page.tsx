import Image from 'next/image';

export default function Johnstagram() {
    return (
      <main>
        <h1>Welcome to Johnstagram</h1>
        <p>This is the about page.</p>
        
<Image src="/images/selfie.JPG"
        alt="Hero Image"
        width={1200}
        height={800}/>

      </main>
    );
  }