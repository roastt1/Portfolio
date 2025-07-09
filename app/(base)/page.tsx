import Image from "next/image";

export default function Home() {
    return (
        <main className="flex items-center justify-center bg-white px-4">
            <div className="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row">
                {/* 왼쪽 이미지 */}
                <div className="flex flex-shrink-0 animate-slide-up items-center justify-center">
                    <Image
                        src="/images/landing-image.png"
                        alt="Profile"
                        width={480}
                        height={480}
                        className="rounded-xl object-cover shadow-lg"
                    />
                </div>

                {/* 오른쪽 텍스트 */}
                <div className="flex flex-col items-start justify-center space-y-4">
                    <h1
                        className="animate-slide-left-fade text-4xl font-bold opacity-0"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Park Joon Seon
                    </h1>
                    <p
                        className="animate-slide-left-fade text-xl text-gray-600 opacity-0"
                        style={{ animationDelay: "0.5s" }}
                    >
                        Frontend Developer
                    </p>
                    <p
                        className="animate-slide-left-fade text-gray-500 opacity-0"
                        style={{ animationDelay: "0.7s" }}
                    >
                        Passionate about creating interactive and user-friendly
                        web experiences.
                    </p>
                </div>
            </div>
        </main>
    );
}
