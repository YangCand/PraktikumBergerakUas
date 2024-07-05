import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  const [date, setDate] = useState('Minggu, 16 Maret 2003');
  const [time, setTime] = useState('9:57:23');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Diary</Text>
      </View>

      <View style={styles.profile}>
      <Image style={styles.profileImage} source={require("../images/profile.png")} />
        <Text style={styles.profileName}>Dr. Candra Prasetiyo S.Kom</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>{date}</Text>
        <Text style={styles.infoText}>{time}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Experience</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Job</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Skill</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.otherButtons}>
        <TouchableOpacity style={styles.otherButton}>
        {/* <Image style={styles.icon} source={require("../images/logo2.png")} /> */}
          <Text style={styles.otherButtonText}>Jadwal Kuliah</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.otherButton}>
        {/* <Image style={styles.icon} source={require("../images/logo2.png")} /> */}
          <Text style={styles.otherButtonText}>Jurnal Mengajar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profile: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  infoText: {
    fontSize: 14,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '30%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  otherButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  otherButton: {
    alignItems: 'center',
  },
  otherButtonText: {
    fontSize: 12,
    marginTop: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
    marginTop: 5,
  },

});

export default HomeScreen;