import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require('../images/profile.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>Dr. Candra Prasetiyo S.Kom</Text>
        <Text style={styles.profileTitle}>CEO KSCARE</Text>
      </View>
      
      <View style={styles.contactInfo}>
        <View style={styles.contactItem}>
          <Icon name="setting" size={24} color="gray" />
          <Text style={styles.contactText}>pengaturan</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="bell" size={24} color="gray" />
          <Text style={styles.contactText}>Notifikasi</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="face-man-profile" size={24} color="gray" />
          <Text style={styles.contactText}>Tentang</Text>
        </View>
       
        <View style={styles.contactItem}>
          <Icon name="projector-screen-variant" size={24} color="gray" />
          <Text style={styles.contactText}>Penyimpanan</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#2962FF',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  settingsButton: {
    padding: 8,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 32,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  profileTitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  followers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 16,
  },
  followersText: {
    fontSize: 14,
    color: '#888',
  },
  contactInfo: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 16,
  },
});