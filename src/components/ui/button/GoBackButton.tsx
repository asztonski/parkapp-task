import arrowLeft from '../../../assets/arrow-left.svg';
import circle from '../../../assets/circle.svg';

type GoBackButtonProps = {
  className?: string;
};

export default function GoBackButton({ className }: GoBackButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className={`group absolute inline-grid place-items-center ${className ?? ''}`}
      aria-label="Wróć"
      title="Wróć"
    >
      <img
        src={circle}
        alt="circle shape"
        aria-hidden="true"
        className="pointer-events-none select-none"
      />
      <img
        src={arrowLeft}
        alt="left arrow icon"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto transition-transform duration-200 ease-in-out select-none group-hover:-translate-x-0.5"
      />
    </button>
  );
}
