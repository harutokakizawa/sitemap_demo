import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div class="font-medium bg-kokenawagreen">
      <div class="flex justify-center text-2xl font-bold pt-10 text-gray-700">
        サイトマップ
      </div>
      
      <div class="container mx-auto py-10">
        
        <div class="flex items-start justify-center">
            <div class="px-5 mx-3 bg-[#65a30d] w-96 bg-opacity-80 rounded-md">
              <div class="py-5  text-white">
              <h2 class="text-xl pb-3">株式会社コケナワについて</h2>
              <ul class="list-none leading-7">
                <Link href="https://kokenawa.co.jp/corporateinformation"><li class="hover:underline">&gt; 会社情報</li></Link>
                <Link href="https://kokenawa.co.jp/partner"><li class="hover:underline">&gt; PARTNER</li></Link>
                <Link href="https://kokenawa.co.jp/topics"><li class="hover:underline">&gt; お知らせ</li></Link>
              </ul>
              </div>
            </div>
            <div class="px-5 w-96 mx-3 bg-[#65a30d] bg-opacity-80 rounded-md">
              <div class="py-5  text-white">
              <h2 class="text-xl pb-3">事業紹介</h2>
              <ul class="list-none leading-7">
                <Link href="https://kokenawa.co.jp/#menu"><li class="hover:underline">&gt; MENU</li></Link>
                <Link href="https://digitalembassy.or.jp/"><li class="hover:underline">&gt; デジタル大使館について</li></Link>
                <Link href="https://youtu.be/Nsc7WLjzLBI?list=TLGGVzt38fSdOIcxMDA2MjAyMw"><li>&gt;「防災隊」紹介ムービー</li></Link>
                <Link href="https://kokenawa.co.jp/bousaitai"><li class="hover:underline">&gt; 防災隊について</li></Link>
                <Link href="https://questbattler.com/"><li class="hover:underline">&gt; クエストバトラーについて</li></Link>
                <Link href="https://lp.commit-base.com/"><li class="hover:underline">&gt; コミットベースについて</li></Link>
                <Link href="https://kokenawa.co.jp/#box"><li class="hover:underline">&gt; なんでも依頼BOX</li></Link>
                <Link href="https://kokenawa.co.jp/#kokelabo"><li class="hover:underline">&gt; こけラボ会員募集</li></Link>
              </ul>
              </div>
            </div>
            <div class="px-5 w-96 mx-3 bg-[#65a30d] bg-opacity-80 rounded-md">
              <div class="py-5  text-white">
              <h2 class="text-xl pb-3 ">その他</h2>
              <ul class="list-none leading-7">
                <Link href="https://zfrmz.com/vV7DjfJu8OaJM1vn6fwB"><li class="hover:underline">&gt; ウクライナ人道支援の申請</li></Link>
                <Link href="http://kokenawa-jp.heteml.net/terms.pdf"><li class="hover:underline">&gt; 利用規約</li></Link>
                <Link href="http://kokenawa-jp.heteml.net/privacy.pdf"><li class="hover:underline">&gt; プライバシーポリシー</li></Link>
                <Link href="https://zfrmz.com/AItOlw1TrzHwTwAVSODB"><li class="hover:underline">&gt; お問い合わせ</li></Link>
                <Link href="https://kokenawa.co.jp/e_publicnotice"><li class="hover:underline">&gt; 電子広告</li></Link>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      
      
    </main>
  )
}
