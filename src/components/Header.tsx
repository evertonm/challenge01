import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface HeaderProps {
  setDarkMode: any;
  darkMode: boolean;

}

export function Header({ setDarkMode, darkMode }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <View style={styles.viewSwitchTheme}>

        <Text style={styles.textSwitchTheme}>Dark mode</Text>
        <Switch          
          onValueChange={setDarkMode}
          value={darkMode}
        />
      </View>
    </View>
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
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
