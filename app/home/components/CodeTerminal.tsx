"use client";

const TERMINAL_DATA = {
    name: "박준선",
    passion: "UX/UI & Performance",
    status: "Open to Work",
};

interface CodeTerminalProps {
    step: number;
}

export function CodeTerminal({ step }: CodeTerminalProps) {
    return (
        <div
            className={`hidden w-full max-w-[420px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white/50 shadow-2xl backdrop-blur-md transition-all duration-1000 dark:border-gray-800 dark:bg-dark-100/50 sm:flex ${
                step >= 4
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
            }`}
        >
            {/* 터미널 상단 바 */}
            <div className="flex items-center gap-2 bg-gray-100/50 px-4 py-3 dark:bg-dark-200/50">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* 코드 본문 */}
            <div className="p-8 font-mono text-sm leading-relaxed">
                <p className="text-blue-500">const developer = {"{"}</p>
                <p className="ml-4">
                    name:{" "}
                    <span className="text-green-500">{`'${TERMINAL_DATA.name}'`}</span>
                    ,
                </p>
                <p className="ml-4 text-purple-500 underline decoration-purple-500/30 underline-offset-4">
                    passion:{" "}
                    <span className="text-green-500">{`'${TERMINAL_DATA.passion}'`}</span>
                    ,
                </p>
                <p className="ml-4">
                    status:{" "}
                    <span className="text-green-500">{`'${TERMINAL_DATA.status}'`}</span>
                </p>
                <p className="text-blue-500">{"}"};</p>
            </div>
        </div>
    );
}
