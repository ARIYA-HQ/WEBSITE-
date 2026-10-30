import { FormEvent, useEffect, useState } from 'react';
import polls from '../../data/ariyaPolls.json';

interface ReaderPollProps {
    pollId: string;
}

export default function ReaderPoll({ pollId }: ReaderPollProps) {
    const poll = polls.find(item => item.id === pollId);
    const [selected, setSelected] = useState<number | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [savedOnDevice, setSavedOnDevice] = useState(false);

    useEffect(() => {
        try {
            const savedVote = window.localStorage.getItem(`ariya-journal:${pollId}`);
            const option = savedVote === null ? null : Number(savedVote);
            if (option !== null && Number.isInteger(option) && option >= 0 && option < (poll?.options.length ?? 0)) {
                setSelected(option);
                setSubmitted(true);
                setSavedOnDevice(true);
            }
        } catch {
            // Polls remain usable for this visit when browser storage is unavailable.
        }
    }, [pollId, poll?.options.length]);

    if (!poll) return null;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selected === null || submitted) return;

        try {
            window.localStorage.setItem(`ariya-journal:${pollId}`, String(selected));
            setSavedOnDevice(true);
        } catch {
            setSavedOnDevice(false);
        }
        setSubmitted(true);
    };

    return (
        <section aria-labelledby={`${pollId}-question`} className="not-prose my-12 rounded-3xl border border-primary-200 bg-primary-50/70 p-6 dark:border-primary-900/60 dark:bg-primary-950/30 md:p-8">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">Ariya Journal · Reader poll</p>
            <h2 id={`${pollId}-question`} className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{poll.question}</h2>
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitted}>
                    <legend className="sr-only">Choose one response</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {poll.options.map((option, index) => (
                            <label key={option} className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${selected === index ? 'border-primary-500 bg-white text-gray-950 shadow-sm dark:bg-gray-900 dark:text-white' : 'border-gray-200 bg-white/70 text-gray-700 hover:border-primary-300 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200'}`}>
                                <input
                                    type="radio"
                                    name={pollId}
                                    value={index}
                                    checked={selected === index}
                                    onChange={() => setSelected(index)}
                                    className="h-4 w-4 accent-primary-600"
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button type="submit" disabled={selected === null || submitted} className="rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50">
                        {submitted ? 'Vote recorded' : 'Submit vote'}
                    </button>
                    <p role="status" aria-live="polite" className="text-sm text-gray-600 dark:text-gray-300">
                        {submitted ? (savedOnDevice ? 'Your response is saved on this device.' : 'Thanks for voting. Your response is only available for this visit.') : 'Your response stays in this browser and is not sent to Ariya.'}
                    </p>
                </div>
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Votes are private to this device; live or shared poll totals are not available.</p>
            </form>
        </section>
    );
}
