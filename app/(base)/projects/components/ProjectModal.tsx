"use client";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

export default function Modal({ isOpen, onClose, title, content }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="h-[80%] w-[90%] rounded-2xl bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-xl font-bold">{title}</h2>

                <p className="mb-6 text-gray-700">{content}</p>

                <button
                    onClick={onClose}
                    className="rounded-lg border border-black px-4 py-2"
                >
                    닫기
                </button>
            </div>
        </div>
    );
}
