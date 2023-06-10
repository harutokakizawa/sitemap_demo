import Link from 'next/link'
export default function Footer() {
    return (
    <footer class="text-white body-font bg-[#dbd633] p-2">
        <div class="flex text-2xl font-bold pt-10 text-gray-700 justify-center">
            <img src="./s-1920x442_d9c692a1-7354-4b16-b47a-9b023f4aab20.png" fill="none" class="w-40 " />
        </div>
        
       <div class="container mx-auto p-16">
        
        <div class="flex items-start justify-center">
            
            <div class="px-5 mx-10 w-50 ">
                <ul class="list-none leading-7">
                    <Link href="https://kokenawa.co.jp/topics"><li>お知らせ</li></Link>
                    <Link href="https://kokenawa.co.jp/#menu"><li>店舗紹介</li></Link>
                    <Link href="https://kokenawa.co.jp/#box"><li>なんでも依頼BOX</li></Link>
                </ul>
            </div>

            <div class="px-5 mx-10 w-50 border-r-2 border-indigo-500 border-white">
                <ul class="list-none leading-7 pr-14">
                    <Link href="https://kokenawa.co.jp/#partner"><li>コケナワ社の助っ人</li></Link>
                    <Link href="https://kokenawa.co.jp/#kokelabo"><li>こけラボ会員募集</li></Link>
                    <Link href="https://kokenawa.co.jp/corporateinformation"><li>会社情報</li></Link>
                </ul>
            </div>

            

            <div class="px-5 mx-3 w-50 ">
                <ul class="list-none leading-5 text-xs">
                    <Link href="http://kokenawa-jp.heteml.net/terms.pdf"><li>利用規約</li></Link>
                    <Link href="http://kokenawa-jp.heteml.net/privacy.pdf"><li>プライバシーポリシー</li></Link>
                    <Link href="https://zfrmz.com/AItOlw1TrzHwTwAVSODB"><li>お問い合わせ</li></Link>
                    <Link href="https://kokenawa.co.jp/e_publicnotice"><li>電子広告</li></Link>
                </ul>
            </div>
            
        </div>
        </div>
    </footer>
      
    );
  };