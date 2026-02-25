import { useEffect, useState } from "react";

const LoadingScreen = ({ onFinished }: { onFinished?: () => void }) => {
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFinished(true);
            // Give time for the fade-out animation before calling onFinished
            const finishTimer = setTimeout(() => {
                if (onFinished) onFinished();
            }, 500);
            return () => clearTimeout(finishTimer);
        }, 2500);
        return () => clearTimeout(timer);
    }, [onFinished]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${finished ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="relative flex flex-col items-center">
                {/* Heartbeat pulse animation */}
                <div className="relative flex items-center justify-center w-48 h-48">
                    <div className="absolute inset-0 rounded-full border-4 border-brand-green animate-pulse-green" />
                    <div className="absolute inset-6 rounded-full border-4 border-brand-green animate-pulse-green [animation-delay:0.5s]" />
                    <div className="w-32 h-32 flex items-center justify-center z-10">
                        <img
                            src="/logo.png"
                            alt="Awate Healthcare Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Brand Name */}
                <div className="mt-10 text-center animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                        Awate Healthcare
                    </h2>
                    <p className="text-lg font-medium text-brand-green/80 mt-2 uppercase tracking-[0.25em]">
                        We Take Care of You Always
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-16 w-80 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full animate-loading-bar" />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
