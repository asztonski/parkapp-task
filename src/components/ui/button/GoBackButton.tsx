import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../../assets/arrow-left.svg';
import circle from '../../../assets/circle.svg';

type GoBackButtonProps = {
  className?: string;
  fallbackTo?: string;
  replace?: boolean;
};

export default function GoBackButton({
  className,
  fallbackTo = '/login',
  replace = true,
}: GoBackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallbackTo, { replace });
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
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
