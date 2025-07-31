import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './toast.css';

type ToastType = 'success' | 'error' | 'warning' | 'info';

type ToastProps = {
  id: number;
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
  isVisible?: boolean;
}

const Toast = ({ 
  message, 
  type = 'info', 
  duration = 4000, 
  onClose, 
  showCloseButton = false,
  isVisible = true 
}: ToastProps) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose && onClose();
    }, 300);
  };

  const getToastClass = () => {
    const baseClass = 'toast';
    const typeClass = `toast--${type}`;
    const visibilityClass = show ? 'toast--visible' : 'toast--hidden';
    return `${baseClass} ${typeClass} ${visibilityClass}`;
  };

  return (
    <div className={getToastClass()}>
      <div className="toast__content">
        <span className="toast__message">{message}</span>
        {showCloseButton && (
          <button 
            className="toast__close-button" 
            onClick={handleClose}
            aria-label="Close toast"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

const ToastContainer = ({ toasts }: { toasts: ToastProps[] }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

const ToastDemo = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (type: ToastType, message: string, duration = 3000, showCloseButton = false) => {
    const id = Date.now() + Math.random();
    const newToast = {
      id,
      message,
      type,
      duration,
      showCloseButton,
      onClose: () => removeToast(id)
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Toast Component Demo</h2>
      
      <div className="demo-buttons">
        <button 
          className="demo-button demo-button--success"
          onClick={() => addToast('success', 'Success! Your action was completed successfully.')}
        >
          Success Toast
        </button>
        
        <button 
          className="demo-button demo-button--error"
          onClick={() => addToast('error', 'Error! Something went wrong.')}
        >
          Error Toast
        </button>
        
        <button 
          className="demo-button demo-button--warning"
          onClick={() => addToast('warning', 'Warning! Please check your input.')}
        >
          Warning Toast
        </button>
        
        <button 
          className="demo-button demo-button--info"
          onClick={() => addToast('info', 'Info: Here is some helpful information.')}
        >
          Info Toast
        </button>
        
        <button 
          className="demo-button demo-button--success"
          onClick={() => addToast('success', 'This toast has a close button!', 0, true)}
        >
          With Close Button
        </button>
        
        <button 
          className="demo-button demo-button--info"
          onClick={() => addToast('info', 'This toast stays for 8 seconds.', 8000)}
        >
          Long Duration (8s)
        </button>
        
        <button 
          className="demo-button demo-button--warning"
          onClick={() => addToast('warning', 'Quick toast - only 1 second!', 1000)}
        >
          Short Duration (1s)
        </button>
      </div>

      <ToastContainer toasts={toasts} />
    </div>
  );
};

export default ToastDemo;