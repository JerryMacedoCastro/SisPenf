// eslint-disable-next-line no-use-before-define
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  title?: string;
  destinyBack?: string;
  goBackOption?: boolean;
  textColor?: string;
}

const index = (props: HeaderProps) => {
  const { title, destinyBack, goBackOption, textColor } = props
  const navigation = useNavigation()

  const handleGoBack = () => {
    if (!destinyBack) {
      navigation.goBack()
    } else {
      navigation.navigate(destinyBack)
    }
  }

  return (
    <>

      {goBackOption && (
        <BorderlessButton style={styles.goBack}>
          <Feather
            name="arrow-left"
            size={18}
            color={textColor || '#51615F'}
            onPress={navigation.goBack}
          />
          <Text
            style={
              textColor
                ? [styles.goBacktext, { color: textColor }]
                : styles.goBacktext
            }
            onPress={handleGoBack}
          >
            Voltar
          </Text>
        </BorderlessButton>
      )}
      {title && (<Text
        style={textColor ? [styles.title, { color: textColor }] : styles.title}
      >
        {title}
      </Text>
      )}
    </>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    marginBottom: 1
  },
  goBack: {
    height: 20,
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    marginLeft: 8,
    alignSelf: 'flex-start'
  },

  goBacktext: {
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 14,
    marginLeft: 4,
    color: '#51615F'
  },

  title: {
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 14,
    color: '#51615F',
    position: 'absolute',
    top: 50
  }
})
