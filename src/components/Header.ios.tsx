import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

interface HeaderProps {
  setDarkMode: () => void;
  darkMode: boolean;
}

export function Header({ setDarkMode, darkMode }: HeaderProps) {
  return (
    <SafeAreaView style={darkMode ? [styles.container, styles.containerDark] : styles.container}>
      <View style={darkMode ? [styles.header, styles.headerDark] : styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
      <View style={styles.viewSwitchTheme}>

        <Text style={styles.textSwitchTheme}>Dark mode</Text>
        <Switch
          onValueChange={setDarkMode}
          value={darkMode}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewSwitchTheme: {
    flexDirection: 'row',
    marginTop: -20,
    marginBottom: 35,
    alignItems: 'center',
    padding: 10
  },
  textSwitchTheme: {
    marginRight: 10,
    color: 'white'
  },
  container: {
    backgroundColor: '#273FAD',
  },

  containerDark: {
    backgroundColor: '#282B5A'
  },
  header: {
    paddingBottom: 34,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerDark: {
    backgroundColor: '#282B5A'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
