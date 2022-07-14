import { ReactNode, useEffect, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import './Popup.scss';
import UseOutsideClick from '../../utilities/UseOutsideClick';

interface IProps {
  children?: ReactNode,
  show: boolean,
  closeFn: Function
}

const Popup = ({ show = false, closeFn = () => {}, children }: IProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // make sure screen behind popup didnt scroll during opening popup
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show])

  UseOutsideClick(ref, () => closeFn());

  return (
    <div className={`popup ${show ? "" : "hidden"}`}>
      <div className="popup__closeButton">
        <CloseIcon onClick={() => {
          closeFn()
        }} />
      </div>
      <div className="popup__children" ref={ref}>
        {children}
        <a onClick={() => closeFn()}>Close</a>
      </div>
    </div>
  )
}

export default Popup;