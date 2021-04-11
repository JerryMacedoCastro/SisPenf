import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

function useKeyboardControll () {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false)

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handlekeyboardShow)
    Keyboard.addListener('keyboardDidHide', handleKeyboardHidde)
    return () => {
      Keyboard.removeListener('keyboardDidShow', handlekeyboardShow)
      Keyboard.removeListener('keyboardDidHide', handleKeyboardHidde)
    }
  }, [])

  const handlekeyboardShow = () => setIsKeyboardShown(true)
  const handleKeyboardHidde = () => setIsKeyboardShown(false)

  return { isKeyboardShown }
}

export default useKeyboardControll
