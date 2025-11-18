import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { loginUser } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });

      if (res.token) {
        setMsg("Login Successful!");
        console.log(res);
        
        // router.push("/home");
        // router.replace("(tabs)"); // redirect to home tabs
      } else {
        setMsg(res.message);
      }
    } catch (err) {
      setMsg("Network error or server issue");
    }
  };

  return (
    <View style={{ padding: 20,backgroundColor:"white" }}>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={setPassword} 
      />
      <Button title="Login" onPress={handleLogin} />
      <Text>{msg}</Text>
    </View>
  );
}
