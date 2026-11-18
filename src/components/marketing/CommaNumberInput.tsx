import type { InputHTMLAttributes } from 'react';

export function formatIntegerWithCommas(value: string) {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function caretPositionAfterDigits(value: string, digitCount: number) {
    if (digitCount === 0) return 0;

    let digitsSeen = 0;
    for (let index = 0; index < value.length; index += 1) {
        if (/\d/.test(value[index])) digitsSeen += 1;
        if (digitsSeen === digitCount) return index + 1;
    }

    return value.length;
}

type CommaNumberInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'onChange'
> & {
    value: string;
    onValueChange: (value: string) => void;
};

export default function CommaNumberInput({
    value,
    onValueChange,
    ...inputProps
}: CommaNumberInputProps) {
    return (
        <input
            {...inputProps}
            type="text"
            inputMode="numeric"
            value={formatIntegerWithCommas(value)}
            onChange={(event) => {
                const input = event.currentTarget;
                const digitsBeforeCaret = input.value
                    .slice(0, input.selectionStart ?? input.value.length)
                    .replace(/\D/g, '').length;
                const nextValue = input.value.replace(/\D/g, '');
                onValueChange(nextValue);

                const nextCaret = caretPositionAfterDigits(
                    formatIntegerWithCommas(nextValue),
                    digitsBeforeCaret,
                );
                window.requestAnimationFrame(() => {
                    if (document.activeElement === input) {
                        input.setSelectionRange(nextCaret, nextCaret);
                    }
                });
            }}
        />
    );
}
