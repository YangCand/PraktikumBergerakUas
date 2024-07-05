import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, TouchableOpacity, Image } from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    input: {
      width: "80%",
      marginBottom: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
    },
    button: {
      width: "80%",
      padding: 10,
      backgroundColor: "blue",
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
    },
    forgotPassword: {
      marginTop: 10,
      color: "blue",
      fontSize: 12,
    },
    signUp: {
      marginTop: 20,
      color: "blue",
      fontSize: 12,
    },
    logo: {
      width: 300,
      height: 300,
      resizeMode: "contain",
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../images/logo.png")} />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Welcome in my Aplication,
      </Text>
      <Text style={{ marginBottom: 10 }}>Log in now to continue</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forget Password?</Text>
      <Text style={styles.signUp}>
        Don't have an account?{" "}
        <Text
          style={{ fontWeight: "bold", textDecorationLine: "underline" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}
