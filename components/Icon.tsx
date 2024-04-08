import { cn } from '@/utils/style';

type IconProps = {
    size?: string;
    color?: string;
    className?: string;
};

export function LoadingIcon({
    size = '24',
    color = 'currentColor',
    className,
}: IconProps) {
    return (
        <div className={cn('h-6 w-6 animate-spin', className)}>
            <svg
                width={size}
                height={size}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    opacity='0.4'
                    d='M22 12C22 6.47715 17.5228 2 12 2'
                    stroke={color}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M22 11.9996C22 17.5225 17.5228 21.9996 12 21.9996C6.47715 21.9996 2 17.5225 2 11.9996C2 10.4031 2.37412 8.89402 3.03947 7.55518'
                    stroke={color}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </div>
    );
}

export function SearchIcon({
    size = '24',
    color = 'currentColor',
    className,
}: IconProps) {
    return (
        <div className={cn('h-6 w-6', className)}>
            <svg
                width={size}
                height={size}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    opacity='0.4'
                    d='M17.5 17.5L21 21'
                    stroke={color}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z'
                    stroke={color}
                    strokeWidth='2'
                    strokeLinecap='round'
                />
            </svg>
        </div>
    );
}

export function CloseIcon({ color = 'currentColor', className }: IconProps) {
    return (
        <div className={cn('h-6 w-6', className)}>
            <svg
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    opacity='0.4'
                    d='M6 18L8 16M18 6L16 8M6 6L8 8M18 18L16 16'
                    stroke={color}
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M8 16L16 8M8 8L12 12L16 16'
                    stroke={color}
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </div>
    );
}

export function ChevronLeftIcon({ className }: IconProps) {
    return (
        <div className={cn('h-6 w-6', className)}>
            <svg
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    opacity='0.4'
                    d='M14 6L11 9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M14 18L8 12L11 9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </div>
    );
}

export function ChevronRightIcon({ className }: IconProps) {
    return (
        <div className={cn('h-6 w-6', className)}>
            <svg
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    opacity='0.4'
                    d='M10 6L13 9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M10 18L16 12L13 9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </div>
    );
}
