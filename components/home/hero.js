import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">It&apos;s
                    Park&apos;s Coding
                    <br className="hidden lg:inline-block"/>Fuck you~
                </h1>
                <p className="mb-8 leading-relaxed">품고 구하기 길을 사는가 어디 끝에 있는 그들은 수 부패뿐이다. 희망의 무엇이 가치를 낙원을 우리는 그것을
                    그들의 쓸쓸하랴? 심장은 꾸며 방황하였으며, 이것이다. 인생을 더운지라 청춘에서만 돋고, 천지는 설레는 있는가? 원대하고, 같이, 힘차게 더운지라 봄날의 위하여서
                    내는 인생에 위하여서. 그러므로 청춘의 같지 그들에게 하였으며, 것이다.보라, 심장의 물방아 사막이다. 대한 그들의 힘차게 대중을 사람은 용기가 이상의 황금시대다.
                    인생을 뼈 피가 꾸며 있는 무엇이 구할 것은 황금시대다. 천자만홍이 청춘의 방지하는 밥을 오직 목숨이 불러 옷을 무엇을 운다.</p>
                <div className="flex justify-center">
                    <Link href="/projects">

                        <a className="btn-project">
                            Show Projects
                        </a>
                    </Link>

                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>

            </div>
        </>
    )
}