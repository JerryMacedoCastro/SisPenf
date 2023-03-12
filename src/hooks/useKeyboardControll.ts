import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

function useKeyboardControll(): boolean {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const handlekeyboardShow = () => setIsKeyboardShown(true);
  const handleKeyboardHidde = () => setIsKeyboardShown(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      handlekeyboardShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardHidde
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return isKeyboardShown;
}

export default useKeyboardControll;
