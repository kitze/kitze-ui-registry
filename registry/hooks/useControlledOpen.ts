import { useState, useCallback } from "react";

interface UseControlledOpenProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export const useControlledOpen = ({
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  defaultOpen = false,
}: UseControlledOpenProps = {}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const setIsOpen = useCallback(
    (open: boolean) => {
      if (!isControlled) {
        setInternalOpen(open);
      }
      controlledOnOpenChange?.(open);
    },
    [isControlled, controlledOnOpenChange]
  );

  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  return {
    isOpen,
    setIsOpen,
    close,
    isControlled,
  };
};
