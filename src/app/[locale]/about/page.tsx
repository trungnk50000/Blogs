'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export default function AboutMe() {
  const t = useTranslations('Navigation')

  return (
    <div>
      <section className="relative mt-4 lg:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20">
          <div className="flex flex-col items-center justify-center gap-y-1 pb-28 md:mb-10 md:pb-0 lg:col-span-2 lg:mb-40">
            <h2 className="text-secondary text-lg font-bold md:text-xl">Bạn đang xem</h2>
            <nav aria-label="breadcrumb">
              <ol className="text-muted-foreground flex flex-wrap items-center justify-center gap-1.5 break-words text-sm sm:gap-2.5">
                <li className="group inline-flex items-center gap-1.5 underline">
                  <a className="hover:text-foreground transition-colors" href="/vi">
                    <span className="text-title inline-block text-center text-base font-medium italic underline group-hover:font-medium">
                      Trang chủ
                    </span>
                  </a>
                </li>
                <li role="presentation" aria-hidden="true" className="[&amp;>svg]:size-3.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-title font-bold"
                  >
                    <path
                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li className="group pointer-events-none inline-flex items-center gap-1.5">
                  <a className="hover:text-foreground transition-colors" href="/vi/about">
                    <span className="text-secondary inline-block text-center text-base font-medium italic">
                      Về tui
                    </span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="relative">
            <div className="relative z-20 flex items-center justify-center md:absolute md:bottom-1/2 md:left-3/4 md:translate-y-1/2 lg:bottom-full lg:translate-y-full">
              <div className="absolute -top-[110%] left-[calc(50%+80px)] flex h-[100px] w-[175px] -translate-x-1/2 justify-center sm:w-[225px] md:-top-[125%] md:h-[125px] md:w-[300px]">
                <Image
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                    color: 'transparent',
                  }}
                  alt="logo"
                  title="frame-chat-image"
                  loading="lazy"
                  layout="fill"
                  src="/images/frame-chat-2.png"
                />
                <p className="mb-4 flex flex-col items-center justify-center gap-y-0.5 text-xs font-medium text-[#75787e] md:text-sm lg:text-base">
                  <span>{t('frameChat2.greeting')}</span>
                  <span>{t('frameChat2.profession')}</span>
                </p>
              </div>
              <Image
                className="z-20 h-20 w-20 rounded-[100%] bg-white sm:h-24 sm:w-24"
                alt="full-logo"
                title="full-logo-image"
                loading="lazy"
                src="/images/full-logo-img.png"
                width={80}
                height={80}
              />
            </div>
            <div className="relative hidden h-[350px] w-full md:block lg:w-[80%]">
              <Image
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain',
                  color: 'transparent',
                }}
                alt="logo"
                title="chill-image"
                loading="lazy"
                layout="fill"
                src="/images/chill.png"
              />
            </div>
          </div>
          <div>
            <div className="mb:my-12 my-6 flex items-center justify-center space-x-1 pt-6 md:mt-0 md:pt-6 lg:pt-0">
              <div className="overflow-hidden pb-2" style={{ width: 'fit-contain' }}>
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .typeString(
                        '<span style="color: #3490dc; font-size: 50px;">Tui là ai?</span>',
                      )
                      .pauseFor(2000)
                      .start()
                  }}
                />
              </div>
            </div>
            <ul className="text-secondary my-6 flex list-disc flex-col gap-y-4 px-4 font-medium sm:gap-y-8 md:my-12 md:px-0 md:px-14 md:text-lg">
              <li>
                Hiện tại tui đang là mộtFront End Engineer, và cũng đang tập tành để trở thành
                mộtBlogger
              </li>
              <li>
                Tui cũng là một IT DUT-er, may mắn khi vừa năm 2 đại học, tui đã tìm được chỗ thực
                tập để học hỏi, thử sức và trau dồi.
              </li>
              <li>
                Tui luôn biết ơn những người anh đã tận tâm giúp đỡ tui trong quá trình phát triển
                và hoàn thiện bản thân mình.
              </li>
              <li>
                Tui vẫn đang cố gắng hoàn thiện bản thân hơn, những gì tui biết tui đều chia sẻ tận
                tâm, hi vọng sẽ giúp ích cho mọi người một phần nào đó.
              </li>
              <li>
                À, nơi này là nơi tui viết lại những kiến thức, trải nghiệm cá nhân và những câu
                chuyện linh tinh của tui, nếu mọi người có quan tâm tới tui thì cứ ghé vào đây nghen
                hehe.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
