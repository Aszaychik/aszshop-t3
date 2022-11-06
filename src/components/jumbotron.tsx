import Image from 'next/image'
export default function Jumbotron() {
  return (
    <main className="flex justify-center items-center relative  text-center w-full h-48 sm:h-96 lg:h-96 bg-white xl:h-[36rem]">
      <Image className='opacity-25'
      src='https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=946&q=80'
      alt='Jumbotron Image'
      fill
      object-fit='contain'
      priority
      />
      <div className="absolute flex flex-col justify-center items-center gap-12 h-full text-black text-xl xl:text-4xl xl:gap-36 sm:gap-24 sm:text-2xl">
        <p>Welcome to <span className='font-bold'>AsZshop</span></p>
        <button className='border-b-2 rounded-lg border-black p-3 cursor-pointer hover:font-bold transition-all'>Lets Explore!</button>
      </div>
    </main>
  );
}