import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

function useKeyboardControll(): boolean {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const handlekeyboardShow = () => setIsKeyboardShown(true);
  const handleKeyboardHidde = () => setIsKeyboardShown(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handlekeyboardShow);
    Keyboard.addListener("keyboardDidHide", handleKeyboardHidde);
    return () => {
      Keyboard.removeListener("keyboardDidShow", handlekeyboardShow);
      Keyboard.removeListener("keyboardDidHide", handleKeyboardHidde);
    };
  }, []);

  return isKeyboardShown;
}

export default useKeyboardControll;
