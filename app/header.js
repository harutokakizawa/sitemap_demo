import Link from 'next/link'

export default function Header() {
    return (
    <header class="text-gray-600 body-font sticky top-0 z-50 bg-black bg-opacity-30 p-2">
       <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="https://kokenawa.co.jp/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="./s-1920x442_d9c692a1-7354-4b16-b47a-9b023f4aab20.png" fill="none" class="w-40 " />
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-white justify-center">
                
                <a href="https://kokenawa.co.jp/#menu" class="mr-5 hover:text-gray-500 font-bold">
                    
                        事業紹介
                    
                </a>
                <span class="mr-5">|</span>
                <a href="https://kokenawa.co.jp/corporateinformation" class="mr-5 hover:text-gray-500 font-bold">
                   
                        会社情報
                    
                </a>
                <span class="mr-5">|</span>
                <a href="https://zfrmz.com/AItOlw1TrzHwTwAVSODB" class="mr-5 hover:text-gray-500 font-bold">
                   
                        お問い合わせ
                    
                </a>
                
            </nav>
        </div>
    </header>
      
    );
  };